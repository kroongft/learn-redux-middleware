import React from 'react'
import { useParams } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';

export default function PostPage() {
  let { id } = useParams();
  return (
    <PostContainer postId={parseInt(id, 10)} />
  )
}
