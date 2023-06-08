import axios from "axios";
import { MY_IP } from "react-native-dotenv";

export const GET_ARTICLES = "GET_ARTICLES";
export const CATEGORY_BTN = "CATEGORY_BTN";
export const TOGGLE_LOGGED = "TOGGLE_LOGGED";
export const ARTICLES_PENDING = "ARTICLES_PENDING";
export const ARTICLES_REJECTED = "ARTICLES_REJECTED";
export const GET_DETAILS = "GET_DETAILS";
export const DETAILS_PENDING = "DETAILS_PENDING";
export const DETAILS_REJECTED = "DETAILS_REJECTED";
export const SET_ARTICLE_LIKE = "SET_ARTICLE_LIKE";
export const SET_ARTICLE_LIKE2 = "SET_ARTICLE_LIKE2";
export const LOG_TO_DB = "LOG_TO_DB";
export const LOG_OUT = 'LOG_OUT';
export const GET_CATEGORY = "GET_CATEGORY";
export const LOG_IN = 'LOG_IN';

export const categoryBtn = () => {
  fetch(`http://${MY_IP}:4000/api/blogs/category/No Code`);
};

// GET_ARTICLES
export const getArticles = () => (dispatch) => {
  dispatch({ type: ARTICLES_PENDING });
  fetch(`http://${MY_IP}:4000/api/posts/all/1`)
    .then((res) => {
      if (!res.ok) throw new Error("Sin respuesta del servidor");
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_ARTICLES, payload: data });
    })
    .catch((error) =>
      dispatch({ type: ARTICLES_REJECTED, payload: error.message })
    );
};

// GET_DETAILS
export const getDetails = (articleId) => (dispatch) => {
  dispatch({ type: DETAILS_PENDING });
  fetch(`http://${MY_IP}:4000/api/posts/${articleId}`)
    .then((res) => {
      if (!res.ok) throw new Error("Sin respuesta del servidor");
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_DETAILS, payload: data });
    })
    .catch((error) =>
      dispatch({ type: DETAILS_REJECTED, payload: error.message })
    );
};

// SET_ARTICLE_LIKE(DETAILS)
export const setArticleLike = (userId) => {
  return { type: SET_ARTICLE_LIKE, payload: userId };
};

// SET_ARTICLE_LIKE(HOME)
export const setArticleLike2 = (userId, articleId) => {
  return { type: SET_ARTICLE_LIKE2, payload: { userId, articleId } };
};

// GET_CATEGORY
export const getCategory = (category) => {
  return { type: GET_CATEGORY, payload: category };
};

// LOG_TO_DB
export const logToDb = (id) => (dispatch) => {
  fetch(`http://${MY_IP}:4000/api/users/profile/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Sin respuesta del servidor");
      return res.json();
    })
    .then((data) => {
      if (!data._id) throw new Error("User not found");
      return dispatch({ type: LOG_TO_DB, payload: data });
    })
    .catch((error) => console.error(error));
};

//LOG_IN
export const logIn = (user) => (dispatch) => {
  fetch(`http://${MY_IP}:4000/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: user.email })
  })
    .then((res) => {
      if (!res.ok) throw new Error("Sin respuexta del servidor");
      return res.json();
    })
    .then((data) => {
      if (!data.access_token) {
        console.log('NEW_USER');
        const newUserBody = {
          userId: user.sub,
          userName: user.given_name ? user.given_name : user.nickname,
          email: user.email,
          profileImage: user.picture,
        };
        fetch(`http://${MY_IP}:4000/api/users/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUserBody)
        })
          .then((res) => {
            if (!res.ok) throw new Error("Sin respuesta del servidor");
            fetch(`http://${MY_IP}:4000/api/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email: user.email })
            })
              .then((res) => {
                if (!res.ok) throw new Error("Sin respuesta del servidor");
                return res.json();
              })
              .then(data => {
                if (!data.access_token) throw new Error('Something went wrong');
                dispatch({ type: LOG_IN, payload: data.access_token });
              })
              .catch(error => console.error(error));
          })
          .catch(error => console.error(error));
      } else {
        console.log('FOUND_USER!!');
        return dispatch({ type: LOG_IN, payload: data.access_token });
      }
    })
    .catch((error) => console.error(error));
};

// LOG_OUT
export const logOut = () => {
  return { type: LOG_OUT }
};

//Handle board:
//1. Move to another board
//2. Create new board
//3. unsaved (?) only if I send the same data

export const handleBoard = (data) => (dispatch) => {
  fetch(`http://${MY_IP}:4000/api/users/saved/${data.userId}`);
};
