import React from "react";
import { Check, Trash2 } from "lucide-react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div className="todo-left">
        <div
          className={`custom-checkbox ${todo.completed ? "checked" : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && <Check size={12} />}
        </div>
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        <Trash2 size={18} className="icon-trash" />
      </button>
    </div>
  );
}

export default TodoItem;