/**
 * Created by yatessss on 16/12/9.
 */
import { combineReducers } from 'redux';
import { sidebarList }from './sidebar';
import { contentList }from './list';

const zhdata = combineReducers({
  sidebar: sidebarList,
  content_list: contentList
})

export default zhdata;
