import React from 'react'
import { PropTypes as PT } from 'prop-types';

import { useFetch } from '../utils/hooks';
import { sendReq } from '../utils/helpers';

function LikeButton({ postId }) {
  const [likesCount, setLikesCount] = useFetch(`posts/${postId}/likes?postId=${postId}`);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('token');

      const res = await sendReq('POST', `posts/${postId}/likes`, { postId }, token);

      if (res.status === 200) {
        setLikesCount(prev => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={!user}>
        <img src="#" alt="Like" />
      </button>
      <p>{likesCount}</p>
    </div>
  );
}

LikeButton.propTypes = {
  postId: PT.string.isRequired,
}

export default LikeButton;