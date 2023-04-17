import React from 'react';

import { useFetch } from '../utils/hooks';

import PostCardMini from './PostCardMini';

function PostsOverview() {
  const posts = useFetch('posts?published=true&likesCount=desc&limit=10');
  
  return (
    <div>
      <h3>Recent Stories</h3>
      {posts 
        ? posts.map((post) => (
          <PostCardMini key={post._id} post={post} />
        )) : null}
    </div>
  );
}

export default PostsOverview;