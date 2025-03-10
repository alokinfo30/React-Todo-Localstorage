import React from 'react';

 const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
      <li
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.todo}
        <button onClick={(e) => {e.stopPropagation(); onDelete(todo.id);}}>Delete</button>
      </li>
    );
  };


  export default TodoItem;
