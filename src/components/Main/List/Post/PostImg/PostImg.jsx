import style from './PostImg.module.css';
import noPhoto from '../img/noPhoto.jpg';
import propTypes from 'prop-types';

export const PostImg = ({title}) => (
  <img className={style.img} src={noPhoto} alt={title}/>
);

PostImg.propTypes = {
  title: propTypes.string,
};
