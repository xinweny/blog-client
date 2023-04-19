import React from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { useFetch } from '../utils/hooks';

import PostCard from '../components/PostCard';

function UserProfilePage() {
  const { id } = useParams();

  const [user] = useFetch(`users/${id}`);
  const [posts] = useFetch(`posts?author=${id}&published=true`);

  return (
    <main>
      {user && posts
      ? <>
        <h2>{user.username}</h2>
        <p>Joined on {format(parseISO(user.createdAt), 'd MMM Y')}</p>
        <h3>Contributions</h3>
        <div>
          {posts.map(post => <PostCard
            key={post._id}
            post={{...post, author: { _id: user._id, username: user.username }}}
          />)}
        </div>
      </>
      : null}
    </main>
  );
}

export default UserProfilePage;