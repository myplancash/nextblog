// Posts.jsx
import { getSortedPostsData } from '@/lib/posts';
import React from 'react';
import ListItem from './ListItem';

const Posts = () => {
  // Not async / await, as we already have the data on our server in the blog posts folder
  const posts = getSortedPostsData();

  return (
    <section className="mx-auto max-w-2xl mt-8">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
