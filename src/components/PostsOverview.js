import React, { useState, useEffect } from 'react';

import PostCardMini from './PostCardMini';

function PostsOverview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://blog-api-5lv9.onrender.com/api/posts?published=true&createdAt=desc&limit=50')
      .then(res => res.json())
      .then(json => setPosts(json.data.posts));
  }, []);
  return (
    <div>
      <h3>Recent Stories</h3>
      {posts.map((post) => (
        <PostCardMini key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostsOverview;