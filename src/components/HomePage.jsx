import React, { Component, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import Posts from "./Posts";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const navigate = useNavigate();

  const [filterText, setFilterText] = useState("");

  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <div className="main-div">
        <input
          type="text"
          placeholder="Search for post by post title"
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            navigate("/newpost");
          }}
        >
          Create New Post
        </button>
        <Posts filter={filterText} />
      </div>
    );
  } else {
    return (
      <div className="main-div">
        <Posts />
      </div>
    );
  }
}
