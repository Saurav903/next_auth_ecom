import React, { Suspense } from 'react';
import { getPosts } from '../ghost-config';
import Blogsclient from '../components/blogsclient';
import Loading from './loading';

const Posts = async() => {
    const posts = await getPosts();

  return (
    <div>
      <Suspense fallback={<Loading/>}>
      <Blogsclient posts={posts} />
      </Suspense>
    </div>
  )
}

export default Posts