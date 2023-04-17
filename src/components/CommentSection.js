import React from 'react';
import { PropTypes as PT } from 'prop-types';

import { useFetch } from '../utils/hooks';

import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

function CommentSection({ postId }) {
  const [comments, setComments] = useFetch(`posts/${postId}/comments`);

  if (!comments) return null;

  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      {comments.map(comment => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
      <CommentForm postId={postId} setComments={setComments} />
    </div>
  );
}

CommentSection.propTypes = {
  postId: PT.string.isRequired,
};

export default CommentSection;