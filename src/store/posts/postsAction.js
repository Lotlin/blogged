import axios from 'axios';
import { URL_API, URL_POSTS } from '../../api/const';
import { deleteToken } from '../tokenReducer';

export const POSTS_REQUEST = 'POST_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
  error: '',
});

export const postsRequestSuccess = data => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = error => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(postsRequest());

  axios(`${URL_API}${URL_POSTS}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((data) => {
      dispatch(postsRequestSuccess(data.data.data.children));
    })
    .catch(err => {
      console.log(err);
      dispatch(deleteToken());
      dispatch(postsRequestError(err.toString()));
    });
};
