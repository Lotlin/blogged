import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import {assignId} from '../../../utils/generateRandomId.js';
import {debounceRaf} from '../../../utils/debounce.js';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as Eye} from './img/eye.svg';
import {ReactComponent as Home} from './img/home.svg';
import {ReactComponent as Post} from './img/post.svg';
import {ReactComponent as Save} from './img/save.svg';


const LIST = [
  {value: 'Главная', Icon: Eye},
  {value: 'Просмотренные', Icon: Home},
  {value: 'Сохраненные', Icon: Post},
  {value: 'Мои посты', Icon: Save},
].map(assignId);


export const Tabs = () => {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropDownOpen)}
          >
            add item
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) &&
        <ul className={style.list} onClick={() =>
          setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => {}}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
