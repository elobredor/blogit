export const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = (id) => (dispatch) => {
  fetch('url')
    .then(res => res.json())
    .then(data => dispatch({ type: GET_ARTICLES, payload: data }))
    .catch(error => console.log(error))
}
