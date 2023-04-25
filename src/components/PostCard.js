import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';
import { v2 } from 'cloudinary';

function PostCard({ post }) {
  const uniqueTags = [...new Set(post.tags)];

  return (
    <div className="post-card">
      <Link to={`/users/${post.author._id}`}>
        <p>{post.author.username}</p>
      </Link>
      <Link to={`/posts/${post._id}`}>
        <h4>{post.title}</h4>
      </Link>
      <p>{format(parseISO(post.createdAt), 'd MMM Y')}</p>
      <div>
        {uniqueTags.map(tag => <p key={tag}>{tag}</p>)}
      </div>
      <p>L{post.likesCount}</p>
      <p>C{post.commentsCount}</p>
      {post.imgUrl ? <img src={v2.url(post.imgUrl)} /> : null}
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
    tags: PT.arrayOf(PT.string),
    imgUrl: PT.string,
  }),
};

export default PostCard;