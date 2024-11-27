import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction.js';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const postsSLice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.error = '';
        state.loading = true;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload.children) {
          state.data = action.payload.children;
        } else {
          state.data = [];
        }
        state.error = '';
        state.loading = false;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  }
});

export default postsSLice.reducer;
