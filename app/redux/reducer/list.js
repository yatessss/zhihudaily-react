/**
 * Created by yatessss on 16/12/15.
 */
export const contentList = (state=[], action) => {
  switch (action.type) {
    case 'GET_CONTENT_LIST':
    case 'GET_CONTENT_LIST_SUCCESS':
      return {
        stories: action.data.stories,
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
      return Object.assign({}, state, {
        ...state,
        loading: false,
        date: action.data.date
      })
    default:
      return state
  }
}
