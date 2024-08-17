import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  
  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
