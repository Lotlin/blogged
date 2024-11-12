import {useContext, useEffect, useState} from 'react';
import {URL_API, URL_POSTS} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePosts = () => {
  const {token, delToken} = useContext(tokenContext);
  const [postsData, setPostsData] = useState([]);

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
        delToken();
      });
  }, [token]);

  return postsData;
};
