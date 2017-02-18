import React from 'react'
// import axios from 'axios';
import { fetchData, initDetailData } from '../redux/action'
import { connect } from 'react-redux'
import '../css/zhihu_news_detail.scss'
import '../css/detail-content.scss'
import api from '../api'
import filter from '../util/filter.js'


const detailContent = React.createClass({
  componentWillMount () {
    let { dispatch} = this.props
    dispatch(fetchData(api.NEWS_INFO + this.props.id))
  },
  toHtml () {
    let html = this.props.detailContent.body
    html = html.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    return {
      __html: html
    }
  },
  componentWillUnmount () {
    let {dispatch, detailContent} = this.props
    let extra = {
      comments: detailContent.comments,
      long_comments: detailContent.long_comments,
      short_comments: detailContent.short_comments
    }
    window.sessionStorage.extra = JSON.stringify(extra)
    dispatch(initDetailData())
  },
  render() {
    let { title, image_source, image, section, body, recommenders  } = this.props.detailContent
    return (
      <div>
        <div className="detail-main-box">
          <div className="detail-img-box margin-top" style={{backgroundImage: 'url(' + image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p') + ')'}}>
            <div className="detail-mask"></div>
            <h1 className="detail-title">{title}</h1>
            <p className="detail-image-source">{image_source}</p>
          </div>

          {/*<!--推荐者部分-->*/}
          {(()=>{
            if (recommenders && recommenders.length > 0) {
              return (
                <div className="recommenders-box">
                  <p>推荐者</p>
                  {recommenders.map((item, index)=>
                    <div className="recommenders-item" key={'recommender-'+index}>
                      <img src={filter.replaceUrl(item.avatar)} alt=""/>
                    </div>
                  )}
                </div>
              )
            }
          })()}

          {(()=>{
            if (body) {
              return <div className="detail-content" dangerouslySetInnerHTML={this.toHtml()}></div>
            }
            {/*else {*/}
              {/*return <iframe  src="shareUrl" frameBorder="0">您的浏览器不支持iframe</iframe>*/}
            {/*}*/}
          })()}


          {(()=>{
            if (section.name) {
              return (
                <div className="section-box">
                  <div className="section-btn">
                    <img src={filter.replaceUrl(section.thumbnail)} alt=""/>
                      <p>本文来自: {section.name} · 合集</p>
                      <div className="arrow"></div>
                  </div>
                </div>
              )
            }
          })()}


        </div>
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  detailContent: state.detail_content
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(detailContent)