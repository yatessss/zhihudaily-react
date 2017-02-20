/**
 * Created by yatessss on 16/12/9.
 */
const initState = {
  stories: [],
  loading: false,
  name: '',
  timestamp: ''
}


export const sectionList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SECTION_START':
      return Object.assign({}, {
        ...state,
        loading: true
      })
    case 'GET_SECTION_SUCCESS':
      return Object.assign({}, action.data, {
        loading: false
      })
    case 'GET_NEXT_SECTION_SUCCESS':
      return Object.assign({}, state, {
        stories: state.stories.concat(action.data.stories),
        timestamp: action.data.timestamp,
        loading: false
      })
    case 'INIT_SECTION':
      return Object.assign({}, initState)
    default:
      return state
  }
}