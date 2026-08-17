import { useState } from "react";
import { ListTodo, CheckCircle2, Star } from "lucide-react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Components", completed: true },
    { id: 3, text: "Practice useState", completed: false },
    { id: 4, text: "Practice Props", completed: false },
    { id: 5, text: "Build Todo App", completed: true }
  ]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-icon">
          <ListTodo size={24} color="#ffffff" />
        </div>
        <div>
          <h1>Todo Manager</h1>
          <p>Stay organized. Get things done.</p>
        </div>
      </header>

      <div className="app-content">
        <TodoForm onAdd={addTodo} />

        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-icon-blue">
              <ListTodo size={22} color="#3b82f6" />
            </div>
            <div>
              <div className="stat-label">Total Todos</div>
              <div className="stat-value">{totalTodos}</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon-green">
              <CheckCircle2 size={22} color="#22c55e" />
            </div>
            <div>
              <div className="stat-label">Completed</div>
              <div className="stat-value">{completedTodos}</div>
            </div>
          </div>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <footer className="app-footer">
          <Star size={16} className="footer-star" />
          <span>Keep going! You're doing great!</span>
        </footer>
      </div>
    </div>
  );
}

export default App;