/**
 * Created by miaoyicheng on 2017/2/14.
 */

const initState = {
  data: {
    body: ''
  }
}

export const detailContent = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        data: action.data,
        loading: false
      }
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true
      }
    // case 'TOGGLE_SIDEBAR':
    //   return Object.assign({}, state, {
    //     ...state,
    //     active: !state.active
    //   })
    default:
      return state
  }
}