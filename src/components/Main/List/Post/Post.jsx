import style from './Post.module.css';
import propTypes from 'prop-types';
import PostImg from './PostImg';
import PostContent from './PostContent';
import PostDelete from './PostDelete';
import Rating from '../../../Rating';
import Date from '../../../Date';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    thumbnail,
    date,
    markdown,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <PostImg title = {title} thumbnail = {thumbnail}/>
      <PostContent title = {title} author={author} markdown={markdown} id={id}/>
      <PostDelete />
      <Rating ups={ups}/>
      <Date date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: propTypes.object,
};

