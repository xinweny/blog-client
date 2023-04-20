import React from 'react';
import { format, parseISO } from 'date-fns';
import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';

function CommentCard({ comment }) {
  return (
    <div>
      <Link to={`/users/${comment.author._id}`}>
        <p>{comment.author.username}</p>
      </Link>
      <p>{format(parseISO(comment.createdAt), 'dd MMM, Y')} at {format(parseISO(comment.createdAt), 'HH:mm')}</p>
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