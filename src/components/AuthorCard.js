import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';

import { useFetch } from '../utils/hooks';

function AuthorCard({ authorId }) {
  const [author] = useFetch(`users/${authorId}`);

  if (!author) return null;

  return (
    <div>
      <Link to={`/users/${author._id}`}><p>{author.username}</p></Link>
    </div>
  );
}

AuthorCard.propTypes = {
  authorId: PT.string.isRequired,
}

export default AuthorCard;