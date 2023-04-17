import React from "react";

import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const result = await getAllPosts();
      setPosts(result.data.posts);
    }
    getPosts();
  }, []);

  return posts.map((post) => {
    return (
      <div className="post-card" key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.message}</p>
      </div>
    );
  });
}
