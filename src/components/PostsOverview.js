import React from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function PostsOverview() {
  const data = useFetch('https://blog-api-5lv9.onrender.com/api/posts?published=true&likesCount=desc&limit=10');
  
  return (
    <div>
      <h3>Recent Stories</h3>
      {data 
        ? data.posts.map((post) => (
          <PostCardMini key={post._id} post={post} />
        )) : null}
    </div>
  );
}

export default PostsOverview;