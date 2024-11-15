import {useEffect, useState} from 'react';
import {URL_API, URL_POSTS} from '../api/const';
import {useDispatch} from 'react-redux';
import {getToken} from './token.js';
import {deleteToken} from '../store/index';

export const usePosts = () => {
  const [postsData, setPostsData] = useState([]);
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}${URL_POSTS}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        setPostsData(data.data.children);
      })
      .catch(err => {
        console.log(err);
        dispatch(deleteToken());
      });
  }, [token]);

  return postsData;
};
