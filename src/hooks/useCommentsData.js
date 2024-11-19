import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from './token.js';
import { commentsRequestAsync } from '../store/comments/commentsAction.js';

export const useCommentsData = (id) => {
  const token = getToken();
  const dispatch = useDispatch();
  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const loading = useSelector(state => state.comments.loading);

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id, token]);

  return [post, comments, loading];
};
