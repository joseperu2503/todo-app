import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='px-8'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.searchValue.length && !props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
      {(props.searchValue.length !== 0 && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
      {props.searchedTodos.map((todo,index) => props.children(todo,index))}
    </section>
  );
}

export { TodoList };