import style from './Search.module.css';
import {ReactComponent as SearchSvg} from './img/search.svg';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type='search' />
    <button className={style.button}>
      <SearchSvg width={128} height={128} />
    </button>
  </form>
);
