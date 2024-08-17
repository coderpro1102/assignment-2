import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onClick={() => toggleTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
