import style from './PostContent.module.css';
import propTypes from 'prop-types';
import { Text } from '../../../../UI/Text';
import { Link, useParams } from 'react-router-dom';

export const PostContent = ({ title, author, id }) => {
  const { page } = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text
            size={18}
            tsize={24}
            className={style.linkPost}
          >
            {title}
          </Text>
        </Link>
      </Text>

      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
    </div>
  );
};

PostContent.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  markdown: propTypes.string,
  id: propTypes.string,
};
