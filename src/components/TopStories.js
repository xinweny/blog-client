import React from 'react';

import { useFetch, useLoading } from '../utils/hooks';

import PostCardMini from './PostCardMini';
import Spinner from './Spinner';

import '../styles/TopStories.css';

function TopStories() {
  const [posts] = useFetch('posts?published=true&likesCount=desc&limit=6');
  const [loaded] = useLoading(posts);

  return (
    <div className="top-stories">
      <h3>Trending</h3>
        {loaded
          ? <div className="top-posts">
              {posts.map(post => (
                <PostCardMini key={post._id} post={post} />
              ))}
            </div>
          : <div className="top-spinner">
              <Spinner options={{ type: 'ellipsis' }} />
            </div>}
    </div>
  );
}

export default TopStories;