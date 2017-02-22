import React from 'react'
import CommonHeader from '../components/common-header.jsx'
import { connect } from 'react-redux'
import filter from '../util/filter'
import '../css/recommender.scss'
import {getRecommender, initRecommender} from '../redux/action'
import api from '../api'


const recommender = React.createClass({
  componentWillMount () {
    let {dispatch} = this.props
    dispatch(getRecommender(api.GET_COMMENTS + this.props.params.id + '/recommenders'))
  },
  componentWillUnmount () {
    let {dispatch} = this.props
    dispatch(initRecommender())
  },
  render() {
    let {recommender} = this.props
    return (
      <div className="recommender-wrap">
        <CommonHeader title="推荐者"></CommonHeader>
        <ul>
          {(()=>{
            if (recommender.items) {
              return (
                <div>
                  <p className="title">本文推荐者</p>
                  {recommender.items[0].recommenders.map(item=>
                  <li>
                    <a href={`http://www.zhihu.com/people/${item.zhihu_url_token}`}>
                      <div className="img-box">
                        <img src={filter.replaceUrl(item.avatar)} alt=""/>
                      </div>
                      <div className="info">
                        <p className="name">{item.name}</p>
                        <p className="bio">{item.bio}</p>
                      </div>
                    </a>
                  </li>
                  )}
                </div>
              )
            }
          })()}
          {(()=>{
            if (recommender.editors) {
              return (
                recommender.editors.map(item=>
                  <li>
                    <a href={`http://www.zhihu.com/people/${item.zhihu_url_token}`}>
                      <div className="img-box">
                        <img src={filter.replaceUrl(item.avatar)} alt=""/>
                      </div>
                      <div className="info">
                        <p className="name">{item.name} <span className="zhubian">主编</span> </p>
                        <p className="bio">{item.bio}</p>
                      </div>
                    </a>
                  </li>
                )
              )
            }
          })()}
        </ul>
      </div>
    )
  }
})

export default connect((state)=>{
  return {
    recommender: state.recommender_data
  };
})(recommender);