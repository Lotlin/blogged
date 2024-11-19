import style from './PostImg.module.css';
import noPhoto from '../img/noPhoto.jpg';
import propTypes from 'prop-types';

export const PostImg = ({ title, thumbnail }) => {
  const srcImg = thumbnail.startsWith('http') ? thumbnail : noPhoto;

  return (
    <img className={style.img} src={srcImg} alt={title}/>
  );
};

PostImg.propTypes = {
  title: propTypes.string,
  thumbnail: propTypes.string,
};
