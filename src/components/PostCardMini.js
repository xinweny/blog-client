import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

function PostCardMini({ post }) {
  return (
    <div className="post-card">
      <Link to={`/posts/${post._id}`}>
        <h4>{post.title}</h4>
      </Link>
      <p>{post.author.username}</p>
      <p>{format(parseISO(post.createdAt), 'dd MMM Y')}</p>
      <p>L{post.likesCount}</p>
      <p>C{post.commentsCount}</p>
    </div>
  );
}

PostCardMini.propTypes = {
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

export default PostCardMini;