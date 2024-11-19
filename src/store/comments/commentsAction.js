import axios from 'axios';
import { URL_API, URL_COMMETS } from '../../api/const';
import { deleteToken } from '../tokenReducer';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
  error: '',
});

export const commentsRequestSuccess = (post, comments) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  post,
  comments,
});

export const commentsRequestError = error => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token || !id) return;

  dispatch(commentsRequest());

  axios.get(`${URL_API}${URL_COMMETS}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      const [
        {
          data: {
            children: [{ data: post }],
          },
        },
        {
          data: {
            children,
          },
        },
      ] = response.data;

      const comments = children.map(item => item.data);

      dispatch(commentsRequestSuccess(post, comments));
    })
    .catch(err => {
      console.log(err);
      dispatch(deleteToken());
      dispatch(commentsRequestError(err.toString()));
    });
};
