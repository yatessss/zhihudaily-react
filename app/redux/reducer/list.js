/**
 * Created by yatessss on 16/12/15.
 */
const initState = {
  loading: false,
  date: '',
  all_stories: [],
  top_stories: [],
  theme_stories: {
    stories: [],
    background: '',
    editors: []
  },
  night_style: false
}


export const contentList = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return Object.assign({}, state, {
        ...state,
        night_style: !state.night_style
      })
    case 'GET_CONTENT_LIST':
    case 'GET_CONTENT_LIST_SUCCESS':
      return Object.assign({}, state, {
        all_stories: [].concat(action.data),
        top_stories: action.data.top_stories,
        date: action.data.date,
        loading: false
      })
    case 'GET_NEXT_NEWS_BEFORE':
      return Object.assign({}, state, {
        ...state,
        loading: true
      })
    case 'GET_NEXT_NEWS_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        loading: false,
        date: action.data.date,
        all_stories: state.all_stories.concat(action.data)
      })
    case 'GET_THEME_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        loading: false,
        theme_stories: action.data
      })
    case 'GET_THEME_BEFORE_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        loading: false,
        theme_stories: {
          ...state.theme_stories,
          stories: state.theme_stories.stories.concat(action.data.stories)
        }
      })
    default:
      return state
  }
}
