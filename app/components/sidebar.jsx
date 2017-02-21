import React from 'react'
import '../css/sidebar.scss'
import { getSidebarData, toggleSidebar } from '../redux/action'
import { connect } from 'react-redux';
import  api from '../api'
import { Router, Route, Link } from 'react-router'

const sidebar =  React.createClass({
  componentDidMount () {
    let { dispatch } = this.props
    dispatch(getSidebarData(api.THEMES))
  },
  toggleSidebar () {
    let { dispatch } = this.props
    dispatch(toggleSidebar())
  },
  render() {
    let { dispatch, list, id } = this.props
    return (
      <div>
        <div className={this.props.active? "sidebar-box show-sidebar" : "sidebar-box"}>
          {/*<!--侧边栏头部-->*/}
          <Link to="/author">
            <div className="sidebar-header" onClick={this.toggleSidebar}>
              <div className="user">
                <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt=""/>
                <p>yatessss</p>
              </div>
              <div className="function">
                <div className="function-sub">
                  <i className="iconfont">&#xe614;</i>
                  <p>我的收藏</p>
                </div>
                <div className="function-sub">
                  <i className="iconfont">&#xe60f;</i>
                  <p>离线下载</p>
                </div>
              </div>
            </div>
          </Link>
          {/*<!--侧边栏列表-->*/}
          <div className="sidebar-list">
            <Link to={`/`}>
              <p  className="sidebar-list-first" onClick={this.toggleSidebar}><i className="iconfont">&#xe61b;</i>首页</p>
            </Link>
            <ul className="sidebar-list-ul">

              {list.map(item =>
              <Link key={item.name} to={`/theme/${item.id}`}>
                <li className="sidebar-list-li" onClick={this.toggleSidebar}>
                  <p>{item.name}</p>
                  <div>+</div>
                </li>
              </Link>
              )}
            </ul>
          </div>
        </div>
        <div onClick={this.toggleSidebar} className={this.props.active? "sidebar-mask": ''}></div>
      </div>
    )
  }
});


const mapStateToProps = (state, ownProps) => ({
  list: state.sidebar.list,
  active: state.sidebar.active
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//
// })

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(sidebar)

