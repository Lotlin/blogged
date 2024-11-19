import { useEffect } from 'react';
import { getToken } from './token.js';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/posts/postsAction.js';

export const usePosts = () => {
  const token = getToken();
  const dispatch = useDispatch();
  const postsData = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [postsData, loading];
};
