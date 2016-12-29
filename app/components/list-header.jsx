import React from 'react'
// import axios from 'axios';
import { toggleSidebar } from '../redux/action'
import { connect } from 'react-redux';
import '../css/list-header.scss'

const listHeader = React.createClass({
  componentWillMount () {
  },
  render() {
    let { dispatch } = this.props
    return (
        <div className="list-header">
          <div className="header-icon" onClick={()=>{dispatch(toggleSidebar())}} ><i className="iconfont">&#xe612;</i></div>
          <div  className="header-cont"><p>title</p></div>
          <div  className="header-cont"><p>tip</p></div>
          <div className="header-icon"  ><i className="iconfont">&#xe610;</i></div>
          <div className="header-icon changeMode" ><i className="iconfont">&#xe619;</i></div>
        </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  list: state.sidebar.list,
  active: state.sidebar.active
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(listHeader)
