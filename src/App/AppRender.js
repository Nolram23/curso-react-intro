import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppRender({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) { return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

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
    </>
); 
}

export {AppRender};