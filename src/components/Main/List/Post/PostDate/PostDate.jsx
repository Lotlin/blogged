import style from './PostDate.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate.js';

export const PostDate = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

PostDate.propTypes = {
  date: PropTypes.string,
};

