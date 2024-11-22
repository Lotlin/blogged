import axios from 'axios';
import { URL_API, URL_COMMETS } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState, rejectWithValue }) => {
    const token = getState().token.token;

    if (!token || !id) return;

    return axios.get(`${URL_API}${URL_COMMETS}/${id}`, {
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

        return { post, comments };
      })
      .catch((error) => {
        console.error('Error in Axios request:', error);
        return { error: error.toString() };
      });
  }
);


