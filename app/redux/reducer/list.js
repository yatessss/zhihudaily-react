/**
 * Created by yatessss on 16/12/15.
 */
const initState = {
  loading: false,
  date: '',
  all_stories: [],
  top_stories: []
}


export const contentList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_CONTENT_LIST':
    case 'GET_CONTENT_LIST_SUCCESS':
      return {
        all_stories: [].concat(action.data),
        top_stories: action.data.top_stories,
        date: action.data.date,
        loading: false
      }
    case 'GET_NEXT_NEWS_BEFORE':
      return Object.assign({}, state, {
        ...state,
        loading: true
      })
    case 'GET_NEXT_NEWS_SUCCESS':
      console.log(action)
      console.log(state)
      return Object.assign({}, state, {
        ...state,
        loading: false,
        date: action.data.date,
        all_stories: state.all_stories.concat(action.data)
      })
    default:
      return state
  }
}
