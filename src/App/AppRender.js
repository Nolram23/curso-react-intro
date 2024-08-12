import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import {Modal} from '../Modal';



function AppRender() { 
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    
  } = React.useContext(TodoContext)
    
  
  return (
    <>
    <TodoCounter />
    <TodoSearch  />
    <TodoList>
      {loading && <TodosLoading />}
      {error && <TodosError />}
      {(!loading && searchedTodos.length === 0) && 
      <EmptyTodos />}
      {searchedTodos.map(defaultTodo => (
      <TodoItem
        key={defaultTodo.text}
        text={defaultTodo.text}
        completed={defaultTodo.completed}
        onComplete = {() => completeTodo(defaultTodo.text)}
        onDelete = {() => deleteTodo(defaultTodo.text)}
        />
        ))}
    </TodoList> 

    <CreateTodoButton/>

    {openModal && (
    <Modal>
      <TodoForm/>
    </Modal>
    )}

    </>
  
); 
}

export {AppRender};