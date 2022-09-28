import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='px-8'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };