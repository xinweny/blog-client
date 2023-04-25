import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { PropTypes as PT } from 'prop-types';

import LikeCommentCounts from './LikeCommentCounts';
import Tags from './Tags';

import placeholderImg from '../assets/thumbnail-placeholder.png';

import '../styles/PostCard.css';

function PostCard({ post }) {
  const uniqueTags = [...new Set(post.tags)];

  return (
    <div className="post-card">
      <div className="post-info">
        <div>
          <Link to={`/users/${post.author._id}`}>
            <p className="post-card-author">{post.author.username}</p>
          </Link>
          <Link to={`/posts/${post._id}`}>
            <h4 className="post-card-title">{post.title}</h4>
          </Link>
          <Tags tags={uniqueTags} />
        </div>
        <div className="counts-tags">
          <p>{format(parseISO(post.createdAt), 'd MMM Y')}</p>
          <LikeCommentCounts likes={post.likesCount} comments={post.commentsCount} />
        </div>
      </div>
      <div className="post-thumbnail">
        <img src={post.imgUrl || placeholderImg} />
      </div>
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