import './NewTodo.css';
import { useState } from 'react';

function NewTodo({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <section className="input-section">
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <input
          id="new-todo-text"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button id="new-todo-submit" type="submit">Add ToDo</button>
      </form>
    </section>
  );
}

export default NewTodo;