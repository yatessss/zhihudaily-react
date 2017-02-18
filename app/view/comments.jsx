import React from 'react'
import CommonHeader from '../components/common-header.jsx'
import DetailContent from '../components/detail-content.jsx'
import { connect } from 'react-redux'
import filter from '../util/filter'
import '../css/editor.scss'

const editor = React.createClass({
  componentWillMount () {
  },
  render() {
    console.log(this.props)
    let editor = JSON.parse(window.sessionStorage.editors)
    return (
      <div>
        <div className="comments-header">
          <div className="header-icon" click="goBack"><i className="iconfont">&#xe603;</i></div>
          <div className="header-cont"><p><span>{{extra.comments}}</span> 条点评</p></div>
          <div className="header-icon"><i className="iconfont">&#xe627;</i><span>{{popularity}}</span></div>
        </div>
        <ul className="long-comments">
          <li className="long-comments-nav"><span>{{extra.long_comments}}</span> 条长评</li>
          <div v-if="extra.long_comments === 0" className="no-comments">
            <div className="no-comments-icon">
              <i className="iconfont">&#xe62a;</i>
              <p>深度长评虚位以待</p>
            </div>
          </div>
          <comments-comp  v-for="item in longComments" item="item"></comments-comp>
        </ul>
        <ul className="short-comments" id="short-comments-top">
          <li className="short-comments-nav" click="getShortComments"><span>{{extra.short_comments}}</span> 条短评 <i className="iconfont down">&#xe628;</i></li>
          <comments-comp click="show" v-for="item in shortComments" item="item"></comments-comp>
        </ul>

        <!--操作框-->
        <div v-if="showReply" className="mask" click="hidden">
          <div className="reply-box" >
            <p>赞同</p>
            <p>举报</p>
            <p>复制</p>
            <p>回复</p>
          </div>
        </div>
      </div>
    )
  }
})

export default connect((state)=>{
  return {
    editor: state.content_list.theme_stories.editors
  };
})(editor);