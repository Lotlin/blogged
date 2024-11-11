import style from './Date.module.css';
import formatDate from '../../utils/formDate';
import propTypes from 'prop-types';

export const Date = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

Date.propTypes = {
  date: propTypes.string,
};
