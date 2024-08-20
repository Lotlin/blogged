import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T08:45:00.000Z',
      id: '1',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 77,
      date: '2022-01-21T04:22:00.000Z',
      id: '2',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 58,
      date: '2022-10-03T09:00:00.000Z',
      id: '3',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2022-02-24T08:45:00.000Z',
      id: '4',
    },
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postsData, index) => (
          <Post key={postsData.id} postData={postsData} />
        ))}
    </ul>
  );
};
