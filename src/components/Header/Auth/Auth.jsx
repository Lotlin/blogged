import style from './Auth.module.css';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as AuthSvg} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API, URL_USER_IDENTETY} from '../../../api/const';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [showLogOutBtn, setShowLogOutBtn] = useState(false);

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
      });
  }, [token]);

  const handleLogOutBtn = () => {
    delToken(),
    setShowLogOutBtn(!showLogOutBtn);
  };

  return (
    <div className={style.container} aria-label='войти'>
      {auth.name ? (
        <button
          className={style.btn}
          onClick={() => setShowLogOutBtn(!showLogOutBtn)}
        >
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
        ) : (
          <Text
            className={style.authLink}
            As='a'
            href={urlAuth}>
            <AuthSvg className={style.svg} />
          </Text>
      )}
      {showLogOutBtn &&
        <button
          className={style.logout}
          onClick={handleLogOutBtn}
        >
          Выйти
        </button>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
