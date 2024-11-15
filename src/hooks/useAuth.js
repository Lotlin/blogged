import {useEffect, useState} from 'react';
import {URL_API, URL_USER_IDENTETY} from '../api/const';
import {useDispatch} from 'react-redux';
import {getToken} from './token.js';
import {deleteToken} from '../store/index';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}${URL_USER_IDENTETY}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          localStorage.removeItem('bearer');
        }

        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
