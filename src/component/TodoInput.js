import { useState } from "react";

export function TodoInput({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <input
      placeholder="Enter todo"
      className="input"
      type="text"
      value={todo}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
