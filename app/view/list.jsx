import React from 'react'
import SideBar from '../components/sidebar.jsx'
import ListHeader from '../components/list-header.jsx'

const list = React.createClass({
  componentDidUpdate () {
  },
  iconDisplay () {
    if (this.props.params.id) {
      return false
    } else {
      return true
    }
  },
  title () {
    switch (this.props.params.id) {
      case '13':
        return '日常心理学'
      case '12':
        return '用户推荐日报'
      case '3':
        return '电影日报'
      case '11':
        return '不许无聊'
      case '4':
        return '设计日报'
      case '5':
        return '大公司日报'
      case '6':
        return '财经日报'
      case '10':
        return '互联网安全'
      case '2':
        return '开始游戏'
      case '7':
        return '音乐日报'
      case '9':
        return '动漫日报'
      case '8':
        return '体育日报'
      default:
        return '首页'
    }
  },
  render() {
    return (
      <div className="container">
        <ListHeader title={this.title()} iconDisplay={this.iconDisplay()}/>
        <SideBar/>
        {this.props.children}
      </div>
    )
  }
})
export default list
