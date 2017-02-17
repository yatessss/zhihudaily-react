import React from 'react'
// import axios from 'axios';
import { fetchData, showCollection, hideCollection, showShare, hideShare} from '../redux/action'
import { connect } from 'react-redux'
import '../css/detail-header.scss'
import api from '../api'
import util from '../util/filter'

const detailHeader = React.createClass({
  componentWillMount () {
    let { dispatch} = this.props
    dispatch(fetchData(api.STORY_EXTRA + this.props.id))
  },
  changeCollection () {
    let { dispatch} = this.props
    let { collection } = this.props.extra
    if (collection) {
      dispatch(hideCollection())
    } else {
      dispatch(showCollection())
    }
  },
  changeShare () {
    let { dispatch} = this.props
    let { show_share } = this.props.extra
    if (show_share) {
      dispatch(hideShare())
    } else {
      dispatch(showShare())
    }
  },
  goBack () {
    window.history.back()
  },
  render() {
    let { comments, popularity, collection, show_share } = this.props.extra
    return (
      <div>
        <div className="detail-header">
          <div className="header-icon" onClick={this.goBack}><i className="iconfont">&#xe603;</i></div>
          <div className="detail-cont"></div>
          <div className="header-icon" onClick={this.changeShare}><i className="iconfont">&#xe61f;</i></div>
          <div className="header-icon" onClick={this.changeCollection}><i className={collection ? 'iconfont collection' : 'iconfont'}>&#xe604;</i></div>
          <div className="header-icon" ><i className="iconfont">&#xe606;</i><span>{comments}</span></div>
          <div className="header-icon"><i className="iconfont">&#xe611;</i><span>{util.toK(popularity)}</span></div>
        </div>
        {(() => {
          if (show_share) {
            return (
              <div className="mask" onClick={this.changeShare}>
                <div className="share-box">
                  <p className="share-title">分享</p>
                  <div className="share-content">
                    <div className="child"><div className="icon color-red"><i className="iconfont-1">&#xe624;</i></div><p>新浪微博</p></div>
                    <div className="child"><div className="icon color-green-1"><i className="iconfont-1">&#xe626;</i></div><p>微信</p></div>
                    <div className="child"><div className="icon color-green-2"><i className="iconfont-1">&#xe622;</i></div><p>微信朋友圈</p></div>
                    <div className="child"><div className="icon color-yellow"><i className="iconfont-1">&#xe621;</i></div><p>QQ空间</p></div>
                    <div className="child"><div className="icon color-blue-1"><i className="iconfont-1">&#xe625;</i></div><p>推特</p></div>
                    <div className="child"><div className="icon color-blue-2"><i className="iconfont-1">&#xe623;</i></div><p>QQ</p></div>
                    <div className="child"><div className="icon color-green-3"><i className="iconfont-1">&#xe620;</i></div><p>豆瓣</p></div>
                  </div>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  extra: state.detail_content
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(detailHeader)