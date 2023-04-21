import React from 'react'
import { PropTypes as PT } from 'prop-types';

import { useFetch } from '../utils/hooks';
import { sendReq, getStorageAuth } from '../utils/helpers';

function LikeButton({ postId }) {
  const { user, token } = getStorageAuth();

  const [likesCount, setLikesCount] = useFetch(`likes?post=${postId}&count=true`);

  const [like, setLike] = useFetch(`likes?post=${postId}&user=${user.id}`);

  const handleLike = async () => {
    try {
      const res = await sendReq('POST', `likes`, { post: postId }, token);

      const json = await res.json();

      if (res.status === 200) {
        setLikesCount(prev => prev + 1);
        setLike(json.data);
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
        setLike(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!like
        ? <button onClick={handleLike} disabled={!user}>Like</button>
        : <button onClick={handleUnlike} disabled={!user}>Unlike</button>
      }
      <p>{likesCount}</p>
    </div>
  );
}

LikeButton.propTypes = {
  postId: PT.string.isRequired,
}

export default LikeButton;