import React from 'react'
import ListHeader from '../components/common-header.jsx'
import ListItem from '../components/list-item.jsx'
import api from '../api'
import '../css/section.scss'
import { connect } from 'react-redux'
import { getSectionList, initSection, getNextSection } from '../redux/action'

const section = React.createClass({
  componentWillMount () {
    let { dispatch} = this.props
    dispatch(getSectionList(api.GET_SECTION + this.props.params.id))
    window.addEventListener('scroll', this.getScrollData, false)
  },
  getScrollData () {
    let {section} = this.props
    if ((window.document.body.offsetHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !section.loading) {
      this.getSectionNext()
    }
  },
  getSectionNext () {
    let {dispatch, section} = this.props
    let id = this.props.params.id
    dispatch(getNextSection(`${api.GET_SECTION}${id}/before/${section.timestamp}`))
  },
  componentWillUnmount () {
    let {dispatch} = this.props
    window.removeEventListener('scroll', this.getScrollData, false)
    dispatch(initSection())
  },
  render() {
    let {section} = this.props
    return (
      <div className="section-wrap">
        {/*<!--头部-->*/}
        <ListHeader title={section.name}></ListHeader>

        <ul className="section-list">
          {section.stories.map(item=>
            <ListItem key={item.id} item={item}></ListItem>
          )}
        </ul>
      </div>
    )
  }
})
const mapStateToProps = (state, ownProps) => ({
  section: state.section_list
})
export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(section)