import React from 'react';
import { PropTypes as PT } from 'prop-types';

function AuthorCard({ author }) {
  return (
    <div>
      <p>{author.username}</p>
    </div>
  );
}

AuthorCard.propTypes = {
  author: PT.shape({
    username: PT.string.isRequired,
  }),
}

export default AuthorCard;