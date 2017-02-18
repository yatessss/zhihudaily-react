import React from 'react'
// import axios from 'axios';
import '../css/common-header.scss'

const commonHeader = React.createClass({
  componentWillMount () {
  },
  goBack () {
    window.history.back()
  },
  render() {
    let { title } = this.props
    return (
      <div className="common-header">
        <div className="header-icon" onClick={this.goBack}><i className="iconfont">&#xe603;</i></div>
        <div className="header-cont"><p>{title}</p></div>
      </div>
    )
  }
});

export default commonHeader
