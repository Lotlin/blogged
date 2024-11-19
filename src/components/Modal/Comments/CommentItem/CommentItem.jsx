import style from './CommentItem.module.css';
import { Text } from '../../../../UI/Text';
import Date from '../../../Date';
import PropTypes from 'prop-types';

export const CommentItem = ({ comment }) => (
  <li className={style.item}>
    <Text
      As='h3'
      className={style.author}
      size={18}
      tsize={22}
    >
      {comment.author}
    </Text>

    <Text
      As='p'
      className={style.comment}
      size={14}
      tsize={18}
    >
      {comment.body}
    </Text>

    <Date date={comment.created} />
  </li>
);

CommentItem.propTypes = {
  comment: PropTypes.object,
};
