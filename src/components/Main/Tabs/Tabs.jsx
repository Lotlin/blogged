import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import {assignId} from '../../../utils/generateRandomId.js';
import {debounceRaf} from '../../../utils/debounce.js';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as Home} from './img/home.svg';
import {ReactComponent as Top} from './img/top.svg';
import {ReactComponent as Best} from './img/best.svg';
import {ReactComponent as Hot} from './img/hot.svg';


const LIST = [
  {value: 'Главная', Icon: Home},
  {value: 'Топ', Icon: Top},
  {value: 'Лучшие', Icon: Best},
  {value: 'Горячие', Icon: Hot},
].map(assignId);


export const Tabs = () => {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [text, setText] = useState('Главная');

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
            <Text>{text}</Text>
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
                onClick={() => setText(value)}
              >
                <Text>{value}</Text>
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
