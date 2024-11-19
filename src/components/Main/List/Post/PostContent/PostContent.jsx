import style from './PostContent.module.css';
import propTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import Modal from '../../../../Modal';

export const PostContent = ({ title, author, markdown, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>

      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
      {isModalOpen && (
        <Modal
          id={id}
          closeModal = {() => {
            setIsModalOpen(false);
          }}>
        </Modal>
      )}
    </div>
  );
};

PostContent.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  markdown: propTypes.string,
  id: propTypes.string,
};
