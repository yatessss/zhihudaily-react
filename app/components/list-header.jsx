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
        <div className="list-header" key="6">
          <div className="header-icon" onClick={()=>{dispatch(toggleSidebar())}} key="1"><i className="iconfont" key="8">&#xe612;</i></div>
          <div  className="header-cont" key="3"><p>title</p></div>
          <div  className="header-cont" key="5"><p>tip</p></div>
          <div className="header-icon" key="2"><i className="iconfont" key="7">&#xe610;</i></div>
          <div className="header-icon changeMode" key="ffy"><i className="iconfont" key="9">&#xe619;</i></div>
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
