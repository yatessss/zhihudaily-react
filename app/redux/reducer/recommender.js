/**
 * Created by yatessss on 16/12/9.
 */
const initState = {
  items: [{
    recommenders: []
  }],
  editors: []
}

export const recommenderData = (state = initState, action) => {
  switch (action.type) {
    case 'GET_RECOMMENDER_SUCCESS':
      return Object.assign({}, action.data)
    case 'INIT_RECOMMENDER':
      return Object.assign({}, initState)
    default:
      return state
  }
}