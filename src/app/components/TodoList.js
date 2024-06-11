// components/TodoList.js
"use client";
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty tasks

    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(''); // Clear input field after adding
  };

  const handleToggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="todo-list bg-gray-100 rounded-lg shadow-md p-4">
      <h2 className="text-center text-2xl font-semibold text-gray-800">Tasks</h2>
      <div className="input-container flex justify-between items-center mt-4 space-x-4">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={handleInputChange}
          className="todo-input w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
        />
        <button onClick={handleAddTodo} className="add-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
          Add
        </button>
      </div>
      <ul className="mt-6">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item flex justify-between items-center py-2 border-b border-gray-300">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
              className="checkbox mr-4"
            />
            <span className={`todo-text text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="delete-button text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
