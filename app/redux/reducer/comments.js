/**
 * Created by yatessss on 16/12/9.
 */
const initState = {
  long_comments: [],
  short_comments: [],
  loading: false,
  show_box: false
}


export const commentsData = (state = initState, action) => {
  switch (action.type) {
    case 'GET_LONG_COMMENTS_SUCCESS':
      return {
        ...state,
        long_comments: action.data.comments,
        loading: false
      }
    case 'GET_SHORT_COMMENTS_SUCCESS':
      return Object.assign({}, {
        ...state,
        short_comments: action.data.comments,
        loading: false,
        id: action.data.comments[action.data.comments.length - 1].id
      })
    case 'GET_SHORT_COMMENTS_NEXT_SUCCESS':
      return Object.assign({}, {
        ...state,
        loading: false,
        short_comments: state.short_comments.concat(action.data.comments),
        id: action.data.comments[action.data.comments.length - 1].id
      })
    case 'FETCH_DATA_START':
      return Object.assign({}, {
        ...state,
        loading: true
      })
    case 'SHOW_BOX':
      return Object.assign({}, {
        ...state,
        show_box: true
      })
    case 'HIDE_BOX':
      return Object.assign({}, {
        ...state,
        show_box: false
      })
    case 'INIT_COMMENTS':
      return Object.assign({}, initState)
    default:
      return state
  }
}