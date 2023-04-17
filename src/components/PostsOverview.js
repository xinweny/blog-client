import React, { useState } from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function PostsOverview() {
  const [posts, setPosts] = useState([]);

  useFetch(
    'https://blog-api-5lv9.onrender.com/api/posts?published=true&likesCount=desc&limit=10',
    json => setPosts(json.data.posts),
  );
  
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