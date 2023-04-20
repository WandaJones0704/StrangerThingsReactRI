import React, { useEffect, useState } from "react";
import { addPost } from "../api/posts";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function NewPostForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await addPost(token, title, price, description, willDeliver);
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="checkbox"
          name="willDeliver"
          onChange={(e) => {
            setWillDeliver(e.target.checked);
          }}
        />
        <label htmlFor="willDeliver"> Will deliver to you?</label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
