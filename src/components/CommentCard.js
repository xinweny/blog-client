import React from 'react';
import { format, parseISO } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

function CommentCard({ comment }) {
  return (
    <div>
      <p>{comment.author.username}</p>
      <p>{format(parseISO(comment.createdAt), 'dd MMM, Y')} at {format(parseISO(comment.createdAt), 'HH:mm')}</p>
      <p>{comment.text}</p>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PT.shape({
    _id: PT.string.isRequired,
    author: PT.shape({ _id: PT.string.isRequired, username: PT.string.isRequired }),
    post: PT.string.isRequired,
    text: PT.string.isRequired,
    createdAt: PT.string.isRequired,
  }),
  setComments: PT.func.isRequired,
};

export default CommentCard;