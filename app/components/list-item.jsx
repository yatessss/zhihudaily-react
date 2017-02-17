/**
 * Created by yatessss on 16/12/15.
 */
import React from 'react'
// import axios from 'axios';
import { toggleSidebar } from '../redux/action'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import '../css/list-item.scss'
import filter from '../util/filter.js'


const ListItem = React.createClass({
  componentWillMount () {
  },
  render() {
    let { dispatch } = this.props
    let item = this.props.item
    return (
      <Link to={`/detail/${item.id}`} className="list-item-wrap">
        <div className="list-item-wrap">
          <li  className="list-detail-box">
            <div className="list-content-box">
              <p>{item.title}</p>
              {(()=>{
                if (item.display_date) {
                  return <p className="time" >{item.display_date}</p>
                }
              })()}
            </div>
            {(()=>{
              if (item.images) {
                return (
                  <div  className="list-img-box">
                    <img src={filter.replaceUrl(item.images[0])} alt=""/>
                    {(()=>{
                      if (item.multipic) {
                        return <p className="tip">
                          <i className="iconfont">&#xe61c;</i>
                          多图
                        </p>
                      }
                    })()}
                  </div>
                )
              }
            })()}
          </li>
        </div>
      </Link>
    )
  }
});

// const mapStateToProps = (state, ownProps) => ({
//   list: state.sidebar.list,
//   active: state.sidebar.active
// })

export default connect()(ListItem)
