import {
  GET_ARTICLES,
} from './actions'

const initialState = {
  articles: [],
  users: []
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload }
    default:
      return { ...state }
  }
}
