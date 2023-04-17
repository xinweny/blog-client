import React from 'react';
import { PropTypes as PT } from 'prop-types';

import CommentCard from './CommentCard';

function CommentSection({ comments }) {
  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      {comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PT.array.isRequired,
};

export default CommentSection;