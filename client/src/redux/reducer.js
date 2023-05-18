import {
  GET_ARTICLES,
  LOAD_HC_DATA
} from './actions'

const initialState = {
  articles: [],
  users: [],
  logged: false,
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload }
    case LOAD_HC_DATA:
      return { ...state, articles: action.payload }
    default:
      return { ...state }
  }
}
