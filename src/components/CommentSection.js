import React from 'react';
import { PropTypes as PT } from 'prop-types';

import { useStorageListener } from '../utils/hooks';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentSection({ comments }) {
  const user = useStorageListener('user');

  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      {comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
      {user
        ? <CommentForm user={user} />
        : <p>Log in to post a comment!</p>
      }
    </div>
  );
}

CommentSection.propTypes = {
  comments: PT.array.isRequired,
};

export default CommentSection;