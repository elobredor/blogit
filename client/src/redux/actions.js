export const GET_ARTICLES = 'GET_ARTICLES';
export const LOAD_HC_DATA = 'LOAD_HC_DATA';
export const TOGGLE_LOGGED = 'TOGGLE_LOGGED';

import { data } from '../component/home/cardArticle/data';

export const getArticles = (id) => (dispatch) => {
  fetch('url')
    .then((res) => res.json())
    .then((data) => dispatch({ type: GET_ARTICLES, payload: data }))
    .catch((error) => console.log(error));
};

export const loadHCData = () => {
  return { type: LOAD_HC_DATA, payload: data };
};

export const toggleLogged = (userInfo) => {
  return {
    type: TOGGLE_LOGGED,
    payload: userInfo,
  };
};
