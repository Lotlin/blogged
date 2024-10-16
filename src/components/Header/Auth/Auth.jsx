import style from './Auth.module.css';
import {useState, useContext} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {tokenContext} from '../../../context/tokenContext.js';
import {authContext} from '../../../context/authContext.js';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const switchLogout = () => {
    setLogout(!logout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
    localStorage.removeItem('bearer');
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
          onClick={logOut}
        >
        выход
        </button>
      }
    </div>
  );
};
