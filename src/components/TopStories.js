import React from 'react';

import { useFetch, useLoading } from '../utils/hooks';

import PostCard from './PostCard';
import Spinner from './Spinner';

function TopStories() {
  const [posts] = useFetch('posts?published=true&likesCount=desc&limit=10');
  const [loaded] = useLoading(posts);

  return (
    <div>
      <h3>Trending</h3>
      <div>
        {loaded
          ? posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))
          : <Spinner options={{ type: 'ellipsis' }} />}
      </div>
    </div>
  );
}

export default TopStories;