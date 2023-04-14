import React, { useState, useEffect } from 'react';

import PostCardMini from './PostCardMini';

function TopStories() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog-api-5lv9.onrender.com/api/posts?published=true&likesCount=desc&limit=10')
      .then(res => res.json())
      .then(res => {
        setPosts(res.data.posts);
      });
  }, []);

  return (
    <div>
      <h3>Trending</h3>
      <div>
        {posts.map(post => (
          <PostCardMini key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default TopStories;