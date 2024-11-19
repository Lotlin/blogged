import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR,
} from './commentsAction';

const initialState = {
  loading: true,
  error: '',
  post: null,
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.post,
        comments: action.comments,
        error: '',
      };

    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
