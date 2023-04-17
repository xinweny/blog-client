import React from 'react';
import { PropTypes as PT } from 'prop-types';

import { useFetch } from '../utils/hooks';

function AuthorCard({ authorId }) {
  const [author] = useFetch(`users/${authorId}`);

  if (!author) return null;

  return (
    <div>
      <p>{author.username}</p>
    </div>
  );
}

AuthorCard.propTypes = {
  authorId: PT.string.isRequired,
}

export default AuthorCard;