import {useEffect, useState} from 'react';
import {URL_API, URL_COMMETS} from '../api/const';
import {useDispatch} from 'react-redux';
import {getToken} from './token.js';
import {deleteToken} from '../store/index';

export const useCommentsData = (id) => {
  const [postsData, setCommentsData] = useState([{post: null, comments: []}]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (!token || !id) return;

    setLoading(true);

    fetch(`${URL_API}${URL_COMMETS}/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(([
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]) => {
        const comments = children.map(item => item.data);

        setCommentsData([post, comments]);

        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        dispatch(deleteToken());
        setLoading(false);
      });
  }, [id, token]);

  return {postsData, loading};
};
