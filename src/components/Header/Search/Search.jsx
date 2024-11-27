import { useDispatch } from 'react-redux';
import style from './Search.module.css';

import { ReactComponent as SearchSvg } from './img/search.svg';
import { useState } from 'react';
import { searchRequest } from '../../../store/search/searchAction.js';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(searchRequest(search));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.search}
        type="search"
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button} aria-label='Поиск' type='submit'>
        <SearchSvg />
      </button>
    </form>
  );
};
