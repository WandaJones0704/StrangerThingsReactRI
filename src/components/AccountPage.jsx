import React, { Component, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import UsersPosts from "./UsersPosts";
import useAuth from "../hooks/useAuth";

export default function AccountPage() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="main-div">
      <button
        onClick={(e) => {
          navigate("/logout");
        }}
      >
        Logout
      </button>
      <UsersPosts />
    </div>
  );
}
