import React from 'react';
import PropTypes from 'prop-types';
import {usePosts} from '../hooks/usePosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const fetchData = usePosts();
  const postsData = [];

  fetchData.map(data => {
    const neededPostData = {
      id: data.data.id,
      title: data.data.title,
      author: data.data.author,
      ups: data.data.ups,
      date: data.data.created,
      thumbnail: data.data.thumbnail,
    };
    postsData.push(neededPostData);
  });

  return (
    <postsContext.Provider value={postsData}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
