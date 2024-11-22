import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './commentsAction.js';

const initialState = {
  loading: true,
  error: '',
  post: null,
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.loading = false;
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  }
});

export default commentsSlice.reducer;
