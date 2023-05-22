import { GET_ARTICLES, LOAD_HC_DATA, TOGGLE_LOGGED } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      if (!state.logged) {
        AsyncStorage.setItem('@hasLogged', 'true');
      } else {
        AsyncStorage.removeItem('@hasLogged');
      }
      return { ...state, logged: !state.logged, users: action.payload };
    default:
      return { ...state };
  }
}
