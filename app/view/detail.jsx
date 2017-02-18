import React from 'react'
import DetailHeader from '../components/detail-header.jsx'
import DetailContent from '../components/detail-content.jsx'
import { connect } from 'react-redux'

const detail = React.createClass({
  render() {
    let id  = this.props.params.id
    return (
      <div className="container">
        <DetailHeader id={id}/>
        <DetailContent id={id}/>
        {this.props.children}
      </div>
    )
  }
})

export default detail
