import React from 'react';

import { useFetch } from '../utils/hooks';

import PostCard from './PostCard';

function PostsOverview() {
  const [posts] = useFetch('posts?published=true&likesCount=desc&limit=10');
  
  return (
    <div>
      <h3>Recent Stories</h3>
      {posts 
        ? posts.map((post) => (
          <PostCard key={post._id} post={post} />
        )) : null}
    </div>
  );
}

export default PostsOverview;