import {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as MainIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';

const LIST = [
  {value: 'Главная', Icon: MainIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [btnTitle, setBtnTitle] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounseResize = debounceRaf(handleResize);
    debounseResize();

    window.addEventListener('resize', debounseResize);

    return () => window.removeEventListener('resize', debounseResize);
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && <div className={style.wrapperBtn}>
        <Text As='button' className={style.btn}
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
          {btnTitle}
          <ArrowIcon width={15} height={15} />
        </Text>
      </div>}

      {(isDropDownOpen || !isDropDown) &&
        <ul className={style.list} onClick={() =>
          setIsDropDownOpen(false)}>

          {LIST.map(({value, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text As='button'
                className={style.btn}
                onClick={() => setBtnTitle(value)}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </li>
          ))}
        </ul>}
    </div>
  );
};
