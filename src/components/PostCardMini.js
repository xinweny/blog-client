import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

import LikeCommentCounts from './LikeCommentCounts';

function PostCard({ post }) {
  return (
    <div className="post-card-mini">
      <Link to={`/users/${post.author._id}`}>
        <p>{post.author.username}</p>
      </Link>
      <Link to={`/posts/${post._id}`}>
        <h4>{post.title}</h4>
      </Link>
      <p>{format(parseISO(post.createdAt), 'd MMM Y')}</p>
      <LikeCommentCounts likes={post.likesCount} comments={post.commentsCount} />
    </div>
  );
}

PostCard.propTypes = {
  post: PT.shape({
    _id: PT.string.isRequired,
    title: PT.string.isRequired,
    createdAt: PT.string.isRequired,
    author: PT.shape({
      _id: PT.string.isRequired,
      username: PT.string.isRequired,
    }),
    likesCount: PT.number.isRequired,
    commentsCount: PT.number.isRequired,
  }),
};

export default PostCard;