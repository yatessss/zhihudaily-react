/**
 * Created by miaoyicheng on 2017/2/14.
 */

const initState = {
  body: '',
  image_source: '',
  loading: false,
  title: '',
  image: '',
  collection: false,
  show_share: false

}

export const detailContent = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return Object.assign({}, state, action.data, {loading: false})
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true
      }
    case 'SHOW_COLLECTION':
      return {
        ...state,
        collection: true
      }
    case 'HIDE_COLLECTION':
      return {
        ...state,
        collection: false
      }
    case 'SHOW_SHARE':
      return {
        ...state,
        show_share: true
      }
    case 'HIDE_SHARE':
      return {
        ...state,
        show_share: false
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