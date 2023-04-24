import React, { Component, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import useAuth from "../hooks/useAuth";
import { deletePost, getAllPosts } from "../api/posts";

export default function UsersPosts() {
  const [posts, setPosts] = useState([]);

  const { token, isLoggedIn } = useAuth();

  useEffect(() => {
    async function getPosts() {
      const result = await getAllPosts(token);
      let userPosts = [];

      if (result) {
        await result.data.posts.forEach((post) => {
          if (post.isAuthor) userPosts.push(post);
        });
      }

      setPosts(userPosts);
    }
    getPosts();
  }, [isLoggedIn]);

  return posts.map((post) => {
    return (
      <div className="post-card" key={post._id}>
        <h2>{post.title}</h2>
        <a
          onClick={async (e) => {
            deletePost(token, post._id);
          }}
        >
          Delete
        </a>
      </div>
    );
  });
}
