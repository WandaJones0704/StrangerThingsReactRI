import React from "react";

import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";
import useAuth from "../hooks/useAuth";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const { token, isLoggedIn } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const result = await getAllPosts(token);
      let allPosts = [];
      result.data.posts.forEach((post) => {
        // if (!post.isAuthor)
        allPosts.push(post);
      });

      setPosts(allPosts);
    }
    getPosts();
  }, [isLoggedIn]);

  return posts.map((post) => {
    return (
      <div className="post-card" key={post._id}>
        <h2>{post.title}</h2>

        {/* <p>{post.message}</p> */}
      </div>
    );
  });
}
