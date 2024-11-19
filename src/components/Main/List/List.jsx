import { usePosts } from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import { Loader } from '../../../UI/Loader/Loader';

export const List = () => {
  const [postsData, loading] = usePosts();

  if (loading) {
    return <Loader />;
  }

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => (
          // данные приходят в виде объекта, 1-й ключ- kind, 2-й- нужные дынные
          <Post key={postData.data.id} postData={postData.data} />
        ))
      }
    </ul>
  );
};
