import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-01-21T10:45:00.000Z',
      id: 1,
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2022-01-31T10:00:00.000Z',
      id: 2,
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 124,
      date: '2022-10-24T08:00:00.000Z',
      id: 3,
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 24,
      date: '2022-02-24T10:45:00.000Z',
      id: 4,
    },
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postsData) => (
          <Post key={postsData.id} postData={postsData} />
        ))
      }
    </ul>
  );
};
