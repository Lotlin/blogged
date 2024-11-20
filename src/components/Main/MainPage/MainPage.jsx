import style from './MainPage.module.css';
import { Text } from '../../UI/Text';

export const MainPage = () => (
  <div className={style.wrapper}>
    <Text As='h1' size={22} tsize={26}>Сартовая страница</Text>

    <Text As='h1' size={18} tsize={20} fweight='medium'>
      Добро пожаловать!
    </Text>

    <Text As='h1' size={16} tsize={18} fweight='medium'>
      Выберите категорию
    </Text>
  </div>
);
