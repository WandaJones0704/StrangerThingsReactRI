import React, { Component, useEffect, useState } from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { sendMessage } from "../api/messages";

export default function MessageReplies() {
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState([]);
  const [message, setMessage] = useState([]);

  const { postId } = useParams();
  const { token, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await sendMessage(token, postId, message);
      if (result.success) {
        setErrorText("Message sent successfully!");
      } else {
        setErrorText("Message failed to send.");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Send Message</button>
      </form>
      <h4>{errorText}</h4>
    </div>
  );
}
