export const GET_ARTICLES = "GET_ARTICLES";
export const ARTICLES_PENDING = "ARTICLES_PENDING";
export const ARTICLES_REJECTED = "ARTICLES_REJECTED";
export const GET_DETAILS = "GET_DETAILS";
export const DETAILS_PENDING = "DETAILS_PENDING";
export const DETAILS_REJECTED = "DETAILS_REJECTED";
export const SET_ARTICLE_LIKE = "SET_ARTICLE_LIKE";
export const LOG_TO_DB = "LOG_TO_DB";

// GET_ARTICLES
export const getArticles = () => (dispatch) => {
  dispatch({ type: ARTICLES_PENDING });
  fetch("http://192.168.1.8:4000/api/posts/all/1")
    .then((res) => {
      if (!res.ok) throw new Error('Sin respuesta del servidor');
      return res.json()
    })
    .then((data) => {
      return dispatch({ type: GET_ARTICLES, payload: data.posts });
    })
    .catch(error => dispatch({ type: ARTICLES_REJECTED, payload: error.message }));
};

// GET_DETAILS
export const getDetails = (articleId) => (dispatch) => {
  dispatch({ type: DETAILS_PENDING });
  fetch(`http://192.168.1.8:4000/api/posts/${articleId}`)
    .then(res => {
      if (!res.ok) throw new Error("Sin respuesta del servidor");
      return res.json();
    })
    .then(data => {
      return dispatch({ type: GET_DETAILS, payload: data.post })
    })
    .catch(error => dispatch({ type: DETAILS_REJECTED, payload: error.message }));
}

// SET_ARTICLE_LIKE
export const setArticleLike = (userId) => {
  return { type: SET_ARTICLE_LIKE, payload: userId }
}

export const logToDb = (id) => (dispatch) => {
  fetch(`http://192.168.1.8:4000/api/users/profile/${id}`)
    .then(res => {
      if (!res.ok) throw new Error('Sin respuesta del servidor');
      return res.json();
    })
    .then(data => {
      dispatch({ type: LOG_TO_DB, payload: data.usersProfile })
    })
    .catch(error => console.log(error));
};

