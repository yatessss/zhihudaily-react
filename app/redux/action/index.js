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

export function getNextNews (url, params,successFn=()=>{}) {
  return dispatch => {
    dispatch(getNextNewsBefore())
    axiosGet(url, params, (data)=>{
      dispatch(getNextNewsSuccess(data.data))
      successFn()
    })
  }
}

export function fetchData (url, params,successFn=()=>{}) {
  return dispatch => {
    dispatch(fetchDataStart());
    axiosGet(url, params,( data )=>{
      dispatch(fetchDataSuccess( data.data ));
      successFn();
    })
  }
}

function fetchDataStart() {
  return {
    type: 'FETCH_DATA_START'
  };
}
function fetchDataSuccess(data) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    data
  };
}
export function fetchDataError(data) {
  return {
    type: 'FETCH_DATA_ERROR',
    data
  };
}

export const showCollection = () => {
  return {
    type: 'SHOW_COLLECTION'
  }
}

export const hideCollection = () => {
  return {
    type: 'HIDE_COLLECTION'
  }
}

export const showShare = () => {
  return {
    type: 'SHOW_SHARE'
  }
}

export const hideShare  = () => {
  return {
    type: 'HIDE_SHARE'
  }
}

export const getThemeSuccess = (data) => {
  return {
    type: 'GET_THEME_SUCCESS',
    data
  }
}
export function getThemeData (url, params,successFn=()=>{}) {
  return dispatch => {
    axiosGet(url, params, (data)=>{
      dispatch(getThemeSuccess(data.data))
      successFn()
    })
  }
}
export function getThemeBeforeData (url, params,successFn=()=>{}) {
  return dispatch => {
    dispatch(getNextNewsBefore())
    axiosGet(url, params, (data)=>{
      dispatch(getThemeBeforeSuccess(data.data))
      successFn()
    })
  }
}

export const getThemeBeforeSuccess  = (data) => {
  return {
    type: 'GET_THEME_BEFORE_SUCCESS',
    data
  }
}