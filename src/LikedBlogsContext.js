// LikedBlogsContext.js
import React, { createContext, useContext, useState } from 'react';

const LikedBlogsContext = createContext();

export function useLikedBlogs() {
  return useContext(LikedBlogsContext);
}

export function LikedBlogsProvider({ children }) {
  const [likedBlogs, setLikedBlogs] = useState([]);

  const toggleLike = (id) => {
    if (likedBlogs.includes(id)) {
      // If the blog is already liked, remove it from likedBlogs array
      setLikedBlogs(likedBlogs.filter((blogId) => blogId !== id));
    } else {
      // If the blog is not liked, add it to likedBlogs array
      setLikedBlogs([...likedBlogs, id]);
    }
  };

  return (
    <LikedBlogsContext.Provider value={{ likedBlogs, toggleLike }}>
      {children}
    </LikedBlogsContext.Provider>
  );
}
