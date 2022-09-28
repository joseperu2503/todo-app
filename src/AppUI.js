import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoContext } from './TodoContext';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoSearch } from './components/TodoSearch';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';

function AppUI() {
    const {error,loading,searchedTodos,completeTodo,deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext)
    return(
        <React.Fragment>
            <div className='w-full bg-blue-700 py-10 rounded-b-3xl mb-8'>
                <TodoSearch/>
                <TodoCounter/>
            </div>
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
                    <TodoForm/>
                </Modal>
            }
                
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI }