import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import NavBarButton from "./NavBarButton";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src="../../logo.jpg" alt="" className="nav-image" />
      </Link>
      <NavBarButton />
    </nav>
  );
}
