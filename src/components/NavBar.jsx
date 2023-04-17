import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">
        <img
          src="../../logo.jpg"
          alt=""
          className="nav-image"
          onClick={(e) => {
            navigate("/");
          }}
        />
      </Link>
    </nav>
  );
}
