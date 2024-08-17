import React from 'react';

function TodoItem({ todo, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
