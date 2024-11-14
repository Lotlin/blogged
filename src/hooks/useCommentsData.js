import {useContext, useEffect, useState} from 'react';
import {URL_API, URL_COMMETS} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = (id) => {
  const {token, delToken} = useContext(tokenContext);
  const [postsData, setCommentsData] = useState([{post: null, comments: []}]);
  const [loading, setLoading] = useState(true);

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
        delToken();
        setLoading(false);
      });
  }, [id, token]);

  return {postsData, loading};
};
