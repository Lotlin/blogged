import style from './PostRating.module.css';
import PropTypes from 'prop-types';

export const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'></button>
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг'></button>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
};
