import React, { useState } from "react";
import { List, Plus } from "lucide-react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevents adding empty todos
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <List size={18} className="input-icon" />
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type="submit" className="add-btn">
        <Plus size={18} /> Add
      </button>
    </form>
  );
}

export default TodoForm;