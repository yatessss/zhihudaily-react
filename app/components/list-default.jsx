/**
 * Created by yatessss on 16/12/15.
 */
import React from 'react'
import { getContentData, getNextNews } from '../redux/action'
import { connect } from 'react-redux';
import '../css/list-default.scss'
import api from '../api'
import ListItem from '../components/list-item.jsx'
import filter from '../util/filter'

const listHeader = React.createClass({
  componentDidMount () {
    let { dispatch } = this.props
    dispatch(getContentData(api.LATEST_NEWS))
    window.addEventListener('scroll', this.getScrollList, false)
  },
  getScrollList () {
    let { dispatch } = this.props
    if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !this.props.loading) {
      dispatch(getNextNews(api.NEXT_NEWS + this.props.date))
    }
  },
  render() {
    let { dispatch } = this.props
    let stories = this.props.stories? this.props.stories : []
    let date = this.props.date? this.props.date : ''
    console.log(date)
    return (
        <div className="main-list">
          {/*// <!--轮播组件-->*/}
          {/*<slider top_stories="topStories" v-cloak></slider>*/}

          {/*// <!--列表-->*/}

          <div className="list-box s-{{* date}}" >
            <ul>
              <h2 className="title">{filter.dateTime(date)}</h2>
              {stories.map(item=>
                  <ListItem key={item.id} item={item}></ListItem>
              )}
              {/*<list-comp v-for="subItem in item.stories" item="subItem"></list-comp>*/}
            </ul>
          </div>
        </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => ({
  stories: state.content_list.stories,
  date: state.content_list.date,
  top_stories: state.content_list.top_stories,
  loading: state.content_list.loading,
})

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(listHeader)
