import React, { useState } from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function TopStories() {
  const [posts, setPosts] = useState([]);

  useFetch(
    'https://blog-api-5lv9.onrender.com/api/posts?published=true&likesCount=desc&limit=10',
    json => setPosts(json.data.posts),
  );

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