import React from 'react';
import './App.css';
import { useTodos } from './Hooks/useTodos';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoSearch } from './components/TodoSearch';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoHeader } from './components/TodoHeader';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'Tomar el curso de react', completed: true },
//   { text: 'llorar con la llorona', completed: false }
// ]



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return(
    <React.Fragment>
      <TodoHeader>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
      </TodoHeader>
      <TodoList>
        {error && <p>hay un error</p>}
        {loading && <p>cargando</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
        {searchedTodos.map((todo,index) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoList>
      {openModal && 
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
      }
          
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
