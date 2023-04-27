import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';

import { useFetch } from '../utils/hooks';

import '../styles/AuthorCard.css';

function AuthorCard({ authorId }) {
  const [author] = useFetch(`users/${authorId}`);

  if (!author) return null;

  return (
    <div className="author-card">
      <Link to={`/users/${author._id}`}><p>{author.username}</p></Link>
    </div>
  );
}

AuthorCard.propTypes = {
  authorId: PT.string.isRequired,
}

export default AuthorCard;