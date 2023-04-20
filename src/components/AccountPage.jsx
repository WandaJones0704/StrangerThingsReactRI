import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import UsersPosts from "./UsersPosts";

export default function AccountPage() {
  const navigate = useNavigate();

  return (
    <div>
      <UsersPosts />
      <button
        onClick={(e) => {
          navigate("/logout");
        }}
      >
        Logout
      </button>
    </div>
  );
}
