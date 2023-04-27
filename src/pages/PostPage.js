import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetch, useLoading } from '../utils/hooks';

import BlogPost from '../components/BlogPost';
import AuthorCard from '../components/AuthorCard';
import CommentSection from '../components/CommentSection';
import LikeButton from '../components/LikeButton';

import Spinner from '../components/Spinner';
import Tags from '../components/Tags';

import '../styles/PostPage.css';

function PostPage() {
  const { id } = useParams();
  const [post] = useFetch(`posts/${id}`);
  const [loaded] = useLoading(post);

  return (
    <main className="post-page">
      {loaded ? <>
        <AuthorCard authorId={post.author} />
        <BlogPost post={post} />
        <div className="post-end">
          <LikeButton postId={id} />
          <Tags tags={post.tags} />
        </div>
        <CommentSection postId={id} />
      </> : <Spinner options={{ type: 'ellipsis' }} />}
    </main>
  );
}

export default PostPage;