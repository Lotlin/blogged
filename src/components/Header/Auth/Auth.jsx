import style from './Auth.module.css';
import { useState } from 'react';
import { ReactComponent as AuthSvg } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../UI/Text/Text';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import { Loader } from '../../UI/Loader/Loader';

export const Auth = () => {
  const [showLogOutBtn, setShowLogOutBtn] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const handleLogOutBtn = () => {
    dispatch(deleteToken());
    setShowLogOutBtn(!showLogOutBtn);
    clearAuth();
  };

  return (
    <div className={style.container} aria-label='войти'>
      {loading ? (
        <Loader />) :
          auth.name ? (
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
          )
      }
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
