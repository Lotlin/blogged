import axios from 'axios';
import { URL_API, URL_POSTS } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const POSTS_REQUEST = 'POST_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (_, { getState }) => {
    const token = getState().token.token;

    if (!token) return;

    return axios(`${URL_API}${URL_POSTS}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((data) => {
        const postsData = data.data.data;
        return postsData;
      })
      .catch((error) => {
        console.error('Error in Axios request:', error);
        return { error: error.toString() };
      });
  },
);
