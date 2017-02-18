import React from 'react'
import '../css/comments-item.scss'
import filter from '../util/filter'
import { connect } from 'react-redux';
import { showBox} from '../redux/action'

const commentsItem = React.createClass({
  componentWillMount () {
  },
  goBack () {
    window.history.back()
  },
  render() {
    let item = this.props.item
    let {dispatch} = this.props
    return (
      <li className="comment-li" onClick={()=>{dispatch(showBox())}}>
        <div className="img-box">
          {/*<img src={filter.replaceUrl(item.avatar)} alt=""/>*/}
        </div>
        <div className="comment-content">
          <div className="content-header">
            <div className="author">
              {item.author}
            </div>
            <div className="likes">
              <i className="iconfont">&#xe611;</i> {item.likes}
            </div>
          </div>
          <div className="content-main">
            <p>{item.content}</p>
            {(()=>{
              if (item.reply_to) {
                return (
                  <p className="reply">
                    //{item.reply_to.author}:
                    <span> {item.reply_to.content}</span>
                  </p>
                )
              }
            })()}
          </div>
          <div className="content-time">
            {filter.formatTime(item.time, "MM-dd hh:mm")}
          </div>
        </div>
      </li>
    )
  }
});

export default connect()(commentsItem)