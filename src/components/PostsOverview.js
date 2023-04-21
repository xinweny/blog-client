import React from 'react';

import { useFetch, useLoading } from '../utils/hooks';

import PostCard from './PostCard';
import Spinner from './Spinner';

function PostsOverview() {
  const [posts] = useFetch('posts?published=true&likesCount=desc&limit=10');
  const [loaded] = useLoading(posts);
  
  return (
    <div>
      <h3>Recent Stories</h3>
      {loaded 
        ? posts.map((post) => (
          <PostCard key={post._id} post={post} />
        )) : <Spinner options={{ type: 'ellipsis' }} />}
    </div>
  );
}

export default PostsOverview;