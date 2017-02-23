import React from 'react'
// import axios from 'axios';
import { toggleSidebar, changeMode } from '../redux/action'
import { connect } from 'react-redux';
import '../css/list-header.scss'

const listHeader = React.createClass({
  componentWillMount () {

  },
  changeMode () {
    let {dispatch, night_style} = this.props
    dispatch(changeMode())
    console.log(night_style)
    if (night_style) {
      window.document.getElementById('app').className = ''
    } else {
      window.document.getElementById('app').className = 'night-style'
    }
  },
  render() {
    let { dispatch, title } = this.props
    return (
        <div className="list-header">
          <div className="header-icon" onClick={()=>{dispatch(toggleSidebar())}} ><i className="iconfont">&#xe612;</i></div>
          <div  className="header-cont"><p>{title}</p></div>
          <div  className="header-cont"><p>tip</p></div>
          <div className="header-icon"  ><i className="iconfont">&#xe610;</i></div>
          <div className="header-icon" onClick={this.changeMode}><i className="iconfont">&#xe619;</i></div>
        </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  night_style: state.content_list.night_style,
  list: state.sidebar.list,
  active: state.sidebar.active
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(listHeader)
