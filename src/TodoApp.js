import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';



const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem('todos')) || [];
    console.log('Loaded from localStorage:', storedTodos);

    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    console.log('Saved to localStorage:', todos);

    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), todo: text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  // setTodos(updatedTodos);
  // window.localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'pending':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <>
     <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos()} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  )
}

export default TodoApp