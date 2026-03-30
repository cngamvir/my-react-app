import { useState } from 'react'
import './App.css'
import Todo from './Todo';
import NewTodo from './NewTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Run a mile', completed: false } // example ToDo
  ]);

  // Add new ToDo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete ToDo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <main>
      <header>
        <h1>My To-Do App</h1>
      </header>

      {/* NewTodo Form */}
      <NewTodo addTodo={addTodo} />

      {/* Todo List */}
      <ul id="todo-list">
        {todos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
          />
        ))}
      </ul>
    </main>
  )
}

export default App