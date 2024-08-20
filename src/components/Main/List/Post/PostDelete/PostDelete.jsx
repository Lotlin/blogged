import style from './PostDelete.module.css';
import {ReactComponent as DeleteSvg} from './img/delete.svg';

export const PostDelete = () => (
  <button className={style.delete} aria-label='Удалить'>
    <DeleteSvg width={24} height={24} />
  </button>
);
