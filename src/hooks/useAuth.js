
import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const.js';
import {tokenContext} from '../context/tokenContext.js';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
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
        delToken();
        localStorage.removeItem('bearer');
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
