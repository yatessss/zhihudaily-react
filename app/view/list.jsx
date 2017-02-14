import React from 'react'
import SideBar from '../components/sidebar.jsx'
import ListHeader from '../components/list-header.jsx'
import ListDefault from '../components/list-default.jsx'

const list = React.createClass({
  render() {
    return (
      <div className="container">
        <ListHeader/>
        <SideBar/>
        <ListDefault/>
        {this.props.children}
      </div>
    )
  }
})
export default list
