import style from './Auth.module.css';
import {useContext, useState} from 'react';
import {ReactComponent as AuthSvg} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showLogOutBtn, setShowLogOutBtn] = useState(false);
  const {auth, clearAuth} = useContext(authContext);


  const handleLogOutBtn = () => {
    delToken(),
    setShowLogOutBtn(!showLogOutBtn);
    clearAuth();
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
