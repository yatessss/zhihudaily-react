import React from 'react'
// import axios from 'axios';
import { fetchData } from '../redux/action'
import { connect } from 'react-redux'
import '../css/zhihu_news_detail.scss'
import '../css/detail-content.scss'
import api from '../api'

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
  render() {
    let { title, image_source, image  } = this.props.detailContent
    return (
      <div>
        <div className="detail-main-box">
          <div className="detail-img-box margin-top" style={{backgroundImage: 'url(' + image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p') + ')'}}>
            <div className="detail-mask"></div>
            <h1 className="detail-title">{title}</h1>
            <p className="detail-image-source">{image_source}</p>
          </div>
          <div className="detail-content" dangerouslySetInnerHTML={this.toHtml()}></div>
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