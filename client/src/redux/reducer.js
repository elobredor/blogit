import { GET_ARTICLES, LOAD_HC_DATA, TOGGLE_LOGGED } from "./actions";

const initialState = {
  articles: [],
  users: [],
  logged: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: action.payload };
    case LOAD_HC_DATA:
      return { ...state, articles: action.payload };
    case TOGGLE_LOGGED:
      return { ...state, logged: !state.logged };
    default:
      return { ...state };
  }
}
