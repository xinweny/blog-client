import React from 'react';
import { format, parseISO } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

import { sendReq, getStorageItem } from '../utils/helpers';

function CommentCard({ comment, setComments }) {
  const user = getStorageItem('user', true);
  const token = getStorageItem('token');
  console.log(comment);

  const handleDelete = async () => {
    try {
      const res = await sendReq('DELETE', `posts/${comment.post}/comments/${comment._id}`, {}, token);

      if (res.status === 200) {
        setComments(prev => prev.filter(comment => comment._id !== comment._id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>{comment.author.username}</p>
      <p>{format(parseISO(comment.createdAt), 'dd MMM, Y')} at {format(parseISO(comment.createdAt), 'HH:mm')}</p>
      <p>{comment.text}</p>
      {user.id === comment.author._id
        ? <button onClick={handleDelete}>x</button>
        : null
      }
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