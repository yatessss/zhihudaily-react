/**
 * Created by yatessss on 16/12/9.
 */

import {axiosGet} from '../../util/ajax'
export const getSidebarList = () => {
  return {
    type: 'GET_SIDEBAR_LIST'
  }
}

export const getSidebarListSuccess = (data) => {
  return {
    type: 'GET_SIDEBAR_LIST_SUCCESS',
    data
  }
}

export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR',
})

export function getSidebarData (url, params,successFn=()=>{}) {
  return dispatch => {
    axiosGet(url, params, (data)=>{
      dispatch(getSidebarListSuccess(data.data))
      successFn()
    })
  }
}

export const getContentList = () => {
  return {
    type: 'GET_CONTENT_LIST'
  }
}

export const getContentListSuccess = (data) => {
  return {
    type: 'GET_CONTENT_LIST_SUCCESS',
    data
  }
}
export function getContentData (url, params,successFn=()=>{}) {
  return dispatch => {
    axiosGet(url, params, (data)=>{
      dispatch(getContentListSuccess(data.data))
      successFn()
    })
  }
}

export function getNextNews (url, params,successFn=()=>{}) {
  return dispatch => {
    dispatch(getNextNewsBefore())
    axiosGet(url, params, (data)=>{
      dispatch(getNextNewsSuccess(data.data))
      successFn()
    })
  }
}
export const getNextNewsBefore = () => {
  return {
    type: 'GET_NEXT_NEWS_BEFORE'
  }
}

export const getNextNewsSuccess = (data) => {
  return {
    type: 'GET_NEXT_NEWS_SUCCESS',
    data
  }
}


