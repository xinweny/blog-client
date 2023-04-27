import React from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { useFetch } from '../utils/hooks';

import PostCard from '../components/PostCard';

import '../styles/UserProfilePage.css';

function UserProfilePage() {
  const { id } = useParams();

  const [user] = useFetch(`users/${id}`);
  const [posts] = useFetch(`posts?author=${id}&published=true`);

  return (
    <main className="user-page">
      {user && <div className="user-info">
        <h2>{user.username}</h2>
        <p>Joined on {format(parseISO(user.createdAt), 'd MMM Y')}</p>
      </div>}
      {posts && <div>
        <h3>Articles ({posts.length})</h3>
        <div className="user-posts">
          {posts.map(post => <PostCard
            key={post._id}
            post={{...post, author: { _id: user._id, username: user.username }}}
          />)}
        </div>
      </div>}
    </main>
  );
}

export default UserProfilePage;