import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from '../utils/hooks';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';
import LikeButton from '../components/LikeButton';

function PostPage() {
  const { id } = useParams();

  const [post] = useFetch(`posts/${id}`);

  return (
    <main>
      {post ? <>
        <AuthorCard authorId={post.author} />
        <BlogPost post={post} />
        <CommentSection postId={id} />
        <LikeButton postId={id} />
      </> : null}
    </main>
  );
}

export default PostPage;