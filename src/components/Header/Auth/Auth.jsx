import style from './Auth.module.css';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => {
        if (response.status === 401) localStorage.removeItem('bearer');
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  const switchLogout = () => {
    setLogout(!logout);
  };

  return (
    <div className={style.container}
      onClick={() => switchLogout()}>
      {auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon width={128} height={128}/>
        </Text>
      )}
      {
        logout &&
        <button
          className={style.logout}
          onClick={delToken}
        >
        выход
        </button>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
