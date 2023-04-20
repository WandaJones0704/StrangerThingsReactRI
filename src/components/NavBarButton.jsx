import React, { Component, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import useAuth from "../hooks/useAuth";

export default function NavBarButton() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Logout");
    } else {
      setButtonText("Register");
    }
  }, [isLoggedIn]);

  async function handleButton() {
    if (isLoggedIn) {
      navigate("/logout");
    } else {
      navigate("/register");
    }
  }

  return <button onClick={handleButton}>{buttonText}</button>;
}
