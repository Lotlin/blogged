import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useContext, useRef} from 'react';
import {authContext} from '../../../context/authContext.jsx';

export const FormComment = () => {
  const commentTextRef = useRef(null);
  const {auth} = useContext(authContext);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(commentTextRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>

      <textarea className={style.textarea} ref={commentTextRef}></textarea>

      <button className={style.btn}>Отправить</button>
    </form>
  );
};
