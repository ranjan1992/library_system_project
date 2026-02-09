import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/AddBook.css";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // Checking if all fields are filled or not
    if (!Object.values(form).every(Boolean)) return alert("Fill all fields");

    // dispatching the addBook functionality present inside the bookSlice of the store
    dispatch(addBook({ ...form, id: Date.now().toString() }));

    // Navigating back to the Browse Books Page
    nav("/books/all");
  };

  return (
    <form onSubmit={submit} className="container--add">
      <h1>Add Books</h1>
      {Object.keys(form).map((k) => (
        <input
          key={k}
          placeholder={k}
          onChange={(e) => setForm({ ...form, [k]: e.target.value })}
        />
      ))}
      <button>Add Book</button>
    </form>
  );
}
