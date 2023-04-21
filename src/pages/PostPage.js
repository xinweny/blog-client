import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch, useLoading } from '../utils/hooks';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';
import LikeButton from '../components/LikeButton';

import Spinner from '../components/Spinner';

function PostPage() {
  const { id } = useParams();
  const [post] = useFetch(`posts/${id}`);
  const [loaded] = useLoading(post);

  return (
    <main>
      {loaded ? <>
        <AuthorCard authorId={post.author} />
        <BlogPost post={post} />
        <LikeButton postId={id} />
        <CommentSection postId={id} />
      </> : <Spinner options={{ type: 'ellipsis' }} />}
    </main>
  );
}

export default PostPage;