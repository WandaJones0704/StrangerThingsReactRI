import React, { Component, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import useAuth from "../hooks/useAuth";

export default function NavButton() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      setButtonText("Account");
    } else {
      setButtonText("Login");
    }
  }, [isLoggedIn]);

  async function handleButton() {
    if (isLoggedIn) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  }

  return <button onClick={handleButton}>{buttonText}</button>;
}
