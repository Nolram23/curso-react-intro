import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
function TodoCounter () {
  const {
    completedTodos,
    totalTodos,
  }= React.useContext(TodoContext)
    return (
      
      <h1>
        Has completado {completedTodos} de {totalTodos} ToDos
      </h1>
    );
  }
  
  export { TodoCounter };
