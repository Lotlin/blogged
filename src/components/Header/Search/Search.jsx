import style from './Search.module.css';

import {ReactComponent as SearchSvg} from './img/search.svg';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type="search" />
    <button className={style.button} aria-label='Поиск'>
      <SearchSvg />
    </button>
  </form>
);
