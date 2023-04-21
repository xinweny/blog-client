import React from 'react';

import { useFetch, useLoading } from '../utils/hooks';

import PostCard from './PostCard';
import Spinner from './Spinner';

import '../styles/PostsOverview.css';

function PostsOverview() {
  const [posts] = useFetch('posts?published=true&likesCount=desc&limit=10');
  const [loaded] = useLoading(posts);
  
  return (
    <div className="posts-overview">
      <h2>Recent Stories</h2>
      {loaded 
        ? <div className="post-cards">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div> : <Spinner options={{ type: 'ellipsis' }} />}
    </div>
  );
}

export default PostsOverview;