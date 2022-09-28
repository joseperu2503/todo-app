import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';
// const defaultTodos = [
//   { text: 'cortar cebolla', completed: false },
//   { text: 'Tomar el curso de react', completed: true },
//   { text: 'llorar con la llorona', completed: false }
// ]



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
