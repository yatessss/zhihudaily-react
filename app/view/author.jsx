import React from 'react'
import '../css/author.scss'

const author = React.createClass({
  render() {
    return (
      <div className="author-wrap">
        <div className="photo">
          <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt=""/>
        </div>
        <p className="name">yatessss</p>
        <ul>
          <li><a href="https://github.com/yatessss/zhihudaily-vue">项目github地址</a></li>
          <li><a href="http://www.yatessss.com/">我的博客地址</a></li>
          <li><p>给一个star好吗</p></li>
          <li><p>(✪ω✪)</p></li>
        </ul>
        <div className="btn">
          <p>登出</p>
        </div>
      </div>
    )
  }
})

export default author