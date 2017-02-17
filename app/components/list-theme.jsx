/**
 * Created by yatessss on 16/12/15.
 */
import React from 'react'
import { getThemeData, getThemeBeforeData } from '../redux/action'
import { connect } from 'react-redux';
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
  componentDidUpdate () {
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
        {/*{all_stories.map((item, index) =>*/}
          {/*<div className="list-box" key={index}>*/}
            {/*<ul key={item.date}>*/}
              {/*<h2 className="title">{filter.dateTime(item.date)}</h2>*/}
              {/*{item.stories.map(subItem=>*/}
                {/*<ListItem key={subItem.id} item={subItem}></ListItem>*/}
              {/*)}*/}
              {/*/!*<list-comp v-for="subItem in item.stories" item="subItem"></list-comp>*!/*/}
            {/*</ul>*/}
          {/*</div>*/}
        {/*)}*/}

        <div className="detail-img-box margin-top" >
        <div className="detail-mask"></div>
        <h1 className="detail-title">1</h1>
        <p className="detail-image-source">11</p>
        </div>
        {/*<!--主编-->*/}
        <div  className="editors-box">
          <p>主编</p>
          <div className="editors-item" >
            <img src="" alt=""/>
          </div>
        </div>
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
  all_stories: state.content_list.all_stories,
  date: state.content_list.date,
  top_stories: state.content_list.top_stories,
  loading: state.content_list.loading,
  theme_stories: state.content_list.theme_stories
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(listDefault)
