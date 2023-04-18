import React from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { useFetch } from '../utils/hooks';

function UserProfilePage() {
  const { id } = useParams();
  const [user] = useFetch(`users/${id}`);

  return (
    <main>
      {user
      ? <>
        <h2>{user.username}</h2>
        <p>Joined on {format(parseISO(user.createdAt), 'dd MMM Y')}</p>
        <h3>Articles</h3>
        
      </> : null}
    </main>
  );
}

export default UserProfilePage;