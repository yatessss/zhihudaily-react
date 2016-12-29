/**
 * Created by yatessss on 16/12/9.
 */

export const sidebarList = (state=[], action) => {
  switch (action.type) {
    case 'GET_SIDEBAR_LIST':
      return {
        list: action.data.others
      }
    case 'GET_SIDEBAR_LIST_SUCCESS':
      return {
        list: action.data.others,
        active: false
      }
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        ...state,
        active: !state.active
      })
    default:
      return state
  }
}

