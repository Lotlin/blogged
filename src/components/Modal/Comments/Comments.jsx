import CommentItem from './CommentItem';
import style from './Comments.module.css';
import PropTypes from 'prop-types';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {comments ? (
        comments.map(comment => (
          <CommentItem key={comment.id} comment={comment}/>
        ))
      ) : (
        <li className={style.item}>Нет комментариев</li>
      )
    }
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
