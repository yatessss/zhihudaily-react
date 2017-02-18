/**
 * Created by yatessss on 16/12/15.
 */
import React from 'react'
import { getThemeData, getThemeBeforeData } from '../redux/action'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../css/list-theme.scss'
import api from '../api'
import ListItem from '../components/list-item.jsx'
import filter from '../util/filter'

const listDefault = React.createClass({
  componentDidMount () {
    let { dispatch } = this.props
    let themeId  = this.props.params.id
    dispatch(getThemeData(api.GET_THEME + themeId))
    window.addEventListener('scroll', this.getScrollTheme, false)
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScrollTheme, false)
  },
  // 路由数据更新的时候钩子
  componentDidUpdate () {
    window.sessionStorage.editors = JSON.stringify(this.props.theme_stories.editors)
    console.log(this.state)

  },
  getScrollTheme () {
    let { dispatch, theme_stories } = this.props
    let themeId  = this.props.params.id
    let lastStoriesId = theme_stories.stories[theme_stories.stories.length - 1].id
    if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !this.props.loading) {
      dispatch(getThemeBeforeData(api.GET_THEME + themeId + '/before/' + lastStoriesId))
    }
  },
  render() {
    let { dispatch, theme_stories} = this.props
    let themeId  = this.props.params.id
    return (
      <div className="theme-list">
        <div className="detail-img-box margin-top" style={{backgroundImage: 'url(' + filter.replaceUrl(theme_stories.background) + ')'}}>
        <div className="detail-mask"></div>
        <h1 className="detail-title">{theme_stories.description}</h1>
        <p className="detail-image-source">{theme_stories.imageSource}</p>
        </div>
        {/*<!--主编-->*/}
        {(()=>{
          if (theme_stories.editors && theme_stories.editors.length > 0) {
            return (
              <Link to="/editor">
                <div  className="editors-box">
                  <p>主编</p>
                  {theme_stories.editors.map(item =>
                    <div key={'editor-'+item.id} className="editors-item" >
                      <img src={filter.replaceUrl(item.avatar)} alt=""/>
                    </div>
                  )
                  }
                </div>
              </Link>
            )
          }
        })()}
        {/*<!--列表-->*/}
        <div className="list-box">
          <ul>
            {theme_stories.stories.map(item =>
              <ListItem key={'theme-' + item.id} item={item}></ListItem>
            )}
          </ul>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  theme_stories: state.content_list.theme_stories
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(listDefault)
