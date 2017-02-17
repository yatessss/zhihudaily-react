import React from 'react'
import SideBar from '../components/sidebar.jsx'
import ListHeader from '../components/list-header.jsx'

const list = React.createClass({
  render() {
    return (
      <div className="container">
        <ListHeader/>
        <SideBar/>
        {this.props.children}
      </div>
    )
  }
})
export default list
