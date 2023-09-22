import React from 'react';
import { getPosts } from '../ghost-config';
import Blogsclient from '../components/blogsclient';

const Posts = async() => {
    const posts = await getPosts();
    // console.log(posts);
  return (
    <div>
      <Blogsclient posts={posts}/>
    </div>
  )
}

export default Posts