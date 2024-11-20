import { Text } from '../Text';
import style from './NoPage.module.css';

export const NoPage = () => (
  <div className={style.wrapper}>
    <Text As='h1' className={style.title} size={22} tsize={26}>404</Text>
  </div>
);
