import React from "react";

import { useEffect, useState } from "react";
import { getAllPosts } from "../api/posts";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Posts({ filter }) {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const { token, isLoggedIn } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const result = await getAllPosts(token);
      let allPosts = [];
      result.data.posts.forEach((post) => {
        // if (!post.isAuthor)
        if (filter && filter.length && !post.title.toLowerCase().includes(filter.toLowerCase())) return;
        allPosts.push(post);
      });

      setPosts(allPosts);
    }
    getPosts();
  }, [filter]);

  return posts.map((post) => {
    return (
      <div className="post-card" key={post._id}>
        <p>{post.author.username}</p>
        <hr />
        <h2>{post.title}</h2>
        <h4>{post.description}</h4>
        <p>{post.willDeliver ? "Seller will deliver" : "Seller will not deliver"}</p>
        <p>{post.price}</p>

        <a
          onClick={() => {
            navigate(`/${post._id}`);
          }}
          style={!isLoggedIn || post.isAuthor ? { display: "none" } : {}}
        >
          Send Inquiry
        </a>
      </div>
    );
  });
}
