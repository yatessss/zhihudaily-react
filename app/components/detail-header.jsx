import React from 'react'
// import axios from 'axios';
import { fetchData } from '../redux/action'
import { connect } from 'react-redux'
import '../css/detail-header.scss'
import api from '../api'

const detailHeader = React.createClass({
  componentWillMount () {
    let { dispatch} = this.props
    dispatch(fetchData(api.NEWS_INFO + this.props.id))
  },
  render() {
    let { dispatch, data } = this.props
    return (
      <div className="list-header">
        <div className="header-icon" ><i className="iconfont">&#xe603;</i></div>
        <div className="header-cont"></div>
        <div className="header-icon" ><i className="iconfont">&#xe61f;</i></div>
        <div className="header-icon" ><i className="iconfont">&#xe604;</i></div>
        <div className="header-icon" ><i className="iconfont">&#xe606;</i><span></span></div>
        <div className="header-icon"><i className="iconfont">&#xe611;</i><span></span></div>
        <div>{data.body}</div>
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  data: state.detail_content.data
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(detailHeader)