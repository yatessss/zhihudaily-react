import React from 'react'
import SideBar from '../components/sidebar.jsx'
import ListHeader from '../components/list-header.jsx'
import ListDefault from '../components/list-default.jsx'

const list = React.createClass({
  render() {
    return (
      <div className="container">
        <ListHeader showsidebarsync="showSidebar" title="title" tip="tip" icon-display="iconDisplay"/>
        <SideBar/>
        <ListDefault/>
        {this.props.children}
      </div>
    )
  }
})
export default list
