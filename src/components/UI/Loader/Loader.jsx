import style from './Loader.module.css';
import RingLoader from 'react-spinners/RingLoader';

export const Loader = () => (
  <RingLoader className={style.loader} />
);
