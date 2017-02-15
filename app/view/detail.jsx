import React from 'react'
import DetailHeader from '../components/detail-header.jsx'
import DetailContent from '../components/detail-content.jsx'
import { fetchData } from '../redux/action'
import { connect } from 'react-redux'
import '../css/detail-header.scss'
import api from '../api'

const detail = React.createClass({
  render() {
    let id  = this.props.params.id
    return (
      <div className="container">
        <DetailHeader id={id}/>
        {/*<DetailContent/>*/}
        {this.props.children}
      </div>
    )
  }
})

export default connect((state)=>{
  return {
    page: state.page
  };
})(detail);
