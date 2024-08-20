import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as NoAuth} from './img/login.svg';

export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth : <NoAuth width={128} height={128}/>}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
