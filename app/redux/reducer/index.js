/**
 * Created by yatessss on 16/12/9.
 */
import { combineReducers } from 'redux';
import { sidebarList }from './sidebar';
import { contentList }from './list';
import { detailContent }from './detail';

const zhdata = combineReducers({
  sidebar: sidebarList,
  content_list: contentList,
  detail_content: detailContent
})

export default zhdata;
