import React from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function TopStories() {
  const data = useFetch('https://blog-api-5lv9.onrender.com/api/posts?published=true&likesCount=desc&limit=10');

  return (
    <div>
      <h3>Trending</h3>
      <div>
        {data
          ? data.posts.map(post => (
            <PostCardMini key={post._id} post={post} />
          )) : null}
      </div>
    </div>
  );
}

export default TopStories;