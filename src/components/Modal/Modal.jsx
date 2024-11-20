import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import propTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Text } from '../UI/Text/Text';
import FormComment from './FormComment';
import Comments from './Comments';
import { Loader } from '../UI/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleEscape = e => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const [post, comments, loading] = useCommentsData(id);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {loading ? (
            <Loader />
            ) : (
              <>
                <Text As='h2' className={style.title}>{post.title}</Text>

                <div className={style.content}>
                  <Markdown options={{
                    overrides: {
                      a: {
                        props: {
                          target: '_blank',
                        }
                      }
                    }
                  }}>
                    {post.selftext}
                  </Markdown>
                </div>

                <Text As='p' className={style.author}>{post.author}</Text>

                <FormComment />

                <Comments comments={comments} />

                <button className={style.close} onClick={() => {
                  navigate(`/category/${page}`);
                }}>
                  <CloseIcon />
                </button>
              </>
            )
          }
        </div>
      </div>,
      document.getElementById('modal-root'),
    )
  );
};


Modal.propTypes = {
  id: propTypes.string,
  closeModal: propTypes.func,
};
