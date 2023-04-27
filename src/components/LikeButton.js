import React, { useState } from 'react'
import { PropTypes as PT } from 'prop-types';

import { useFetch } from '../utils/hooks';
import { sendReq, getStorageAuth } from '../utils/helpers';

import { ReactComponent as LikeIcon } from '../assets/heart.svg';

import '../styles/LikeButton.css';

function LikeButton({ postId }) {
  const { user, token } = getStorageAuth();

  const [likesCount, setLikesCount] = useFetch(`likes?post=${postId}&count=true`);

  const [like, setLike] = user ? useFetch(`likes?post=${postId}&user=${user.id}`, []) : useState([]);

  const handleLike = async () => {
    try {
      const res = await sendReq('POST', `likes`, { post: postId }, token);

      const json = await res.json();

      if (res.status === 200) {
        setLikesCount(prev => prev + 1);
        setLike([json.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      const res = await sendReq('DELETE', `likes`, { post: postId }, token);

      if (res.status === 200) {
        setLikesCount(prev => prev - 1);
        setLike([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="like-btn-counter">
      <button className="like-btn" onClick={like.length === 0 ? handleLike : handleUnlike} disabled={!user}>
      <LikeIcon
        style={{
          fill: like.length === 0 ? 'gray' : 'red',
        }}
      />
      </button>
      <p>{likesCount}</p>
    </div>
  );
}

LikeButton.propTypes = {
  postId: PT.string.isRequired,
}

export default LikeButton;