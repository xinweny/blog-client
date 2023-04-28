import React from 'react';
import { format, parseISO } from 'date-fns';
import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/CommentCard.css';

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <div className="comment-card-header">
        <Link to={`/users/${comment.author._id}`}>
          <p className="font-small">{comment.author.username}</p>
        </Link>
        <p className="font-small">{format(parseISO(comment.createdAt), 'hh:mm a')}, {format(parseISO(comment.createdAt), 'dd MMM Y')}</p>
      </div>
      <p>{comment.text}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PT.shape({
    author: PT.shape({ _id: PT.string.isRequired, username: PT.string.isRequired }),
    post: PT.string.isRequired,
    text: PT.string.isRequired,
    createdAt: PT.string.isRequired,
  }),
};

export default CommentCard;