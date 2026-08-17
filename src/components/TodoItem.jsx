import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div className="todo-left">
        <div
          className={`custom-checkbox ${todo.completed ? "checked" : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;