import React from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function TopStories() {
  const posts = useFetch('posts?published=true&likesCount=desc&limit=10');

  return (
    <div>
      <h3>Trending</h3>
      <div>
        {posts
          ? posts.map(post => (
            <PostCardMini key={post._id} post={post} />
          )) : null}
      </div>
    </div>
  );
}

export default TopStories;