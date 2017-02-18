import React from 'react'
import {getLongComments, getShortComments, getShortCommentsNext, showBox, hideBox} from '../redux/action'
import { connect } from 'react-redux'
import api from '../api'
import '../css/comments.scss'
import CommentsItem from '../components/comment-item.jsx'

const comments = React.createClass({
  componentWillMount () {
    let id = this.props.params.id
    let {dispatch} = this.props
    dispatch(getLongComments(`${api.GET_COMMENTS}${id}/long-comments`))
    window.addEventListener('scroll', this.getScrollData, false)
  },
  goBack () {
    window.history.back()
  },
  getShortComments() {
    let {dispatch} = this.props
    let id = this.props.params.id
    dispatch(getShortComments(`${api.GET_COMMENTS}${id}/short-comments`))
  },
  getScrollData () {
    let {data} = this.props
    if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !data.loading) {
      this.getShortCommentsNext()
    }
  },
  getShortCommentsNext () {
    let {dispatch, data} = this.props
    let id = this.props.params.id
    dispatch(getShortCommentsNext(`${api.GET_COMMENTS}${id}/short-comments/before/${data.id}`))
  },
  componentWillUnmount () {
    window.removeEventListener('scroll', this.getScrollData, false)
  },
  render() {
    let extra = JSON.parse(window.sessionStorage.extra)
    let {data} = this.props
    let {dispatch} = this.props
    console.log(this.props)
    return (
      <div>
        <div className="comments-header">
          <div className="header-icon" onClick={this.goBack}><i className="iconfont">&#xe603;</i></div>
          <div className="header-cont"><p><span></span>{extra.comments} 条点评</p></div>
          <div className="header-icon"><i className="iconfont">&#xe627;</i><span></span></div>
        </div>
        <ul className="long-comments">
          <li className="long-comments-nav"><span>{extra.long_comments}</span> 条长评</li>
          {(()=>{
            if (data.long_comments && data.long_comments.length === 0) {
              return (
                <div className="no-comments">
                  <div className="no-comments-icon">
                    <i className="iconfont">&#xe62a;</i>
                    <p>深度长评虚位以待</p>
                  </div>
                </div>
              )
            }
          })()}

          {data.long_comments.map(item=>
            <CommentsItem key={item.id} item={item}></CommentsItem>
          )}
        </ul>


        <ul className="short-comments" id="short-comments-top">
          <li className="short-comments-nav" onClick={this.getShortComments}><span>{extra.short_comments}</span> 条短评 <i className="iconfont down">&#xe628;</i></li>
          {data.short_comments.map(item=>
            <CommentsItem key={item.id} item={item} ></CommentsItem>
          )}
        </ul>
        {/*<!--操作框-->*/}
        {(()=>{
          if (data.show_box) {
            return (
              <div className="mask" onClick={()=>{dispatch(hideBox())}}>
                <div className="reply-box" >
                  <p>赞同</p>
                  <p>举报</p>
                  <p>复制</p>
                  <p>回复</p>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
})

export default connect((state)=>{
  return {
    data: state.comments_data
  };
})(comments);