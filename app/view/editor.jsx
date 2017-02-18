import React from 'react'
import CommonHeader from '../components/common-header.jsx'
import DetailContent from '../components/detail-content.jsx'
import { connect } from 'react-redux'
import filter from '../util/filter'
import '../css/editor.scss'

const editor = React.createClass({
  componentWillMount () {
  },
  render() {
    console.log(this.props)
    let editor = JSON.parse(window.sessionStorage.editors)
    return (
      <div className="editor-wrap">
        <CommonHeader title="主编"></CommonHeader>
        <ul>
          {editor.map(item =>
            <li key={'editor-'+item.id}>
              <a href={'http://news-at.zhihu.com/api/4/editor/'+item.id+'/profile-page/android'}>
                <div className="img-box">
                  <img src={filter.replaceUrl(item.avatar)} alt=""/>
                </div>
                <div className="info">
                  <p className="name">{item.name}</p>
                  <p className="bio">{item.bio}</p>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
})

export default connect((state)=>{
  return {
    editor: state.content_list.theme_stories.editors
  };
})(editor);