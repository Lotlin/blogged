import style from './Post.module.css';
import PropTypes from 'prop-types';
import {PostImage} from './PostImage/PostImage.jsx';
import {PostContent} from './PostContent/PostContent.jsx';
import {PostRating} from './PostRating/PostRating.jsx';
import {PostDate} from './PostDate/PostDate.jsx';
import {PostDelete} from './PostDelete/PostDelete.jsx';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <PostImage title={title} />
      <PostContent title={title} author={author} />
      <PostRating ups={ups}/>
      <PostDate date={date}/>
      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
