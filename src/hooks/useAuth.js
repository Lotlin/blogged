import {useContext, useEffect, useState} from 'react';
import {URL_API, URL_USER_IDENTETY} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);

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
        delToken();
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
