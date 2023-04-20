import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import Posts from "./Posts";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <div>
        <button
          onClick={(e) => {
            navigate("/newpost");
          }}
        >
          Create New Post
        </button>
        <Posts />
      </div>
    );
  } else {
    return (
      <div>
        <Posts />
      </div>
    );
  }
}
