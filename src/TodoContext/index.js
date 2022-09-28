import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props){

    const {item: todos,saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1',[])

  
    const [searchValue,setSearchValue] = React.useState('')
    const [openModal,setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if(searchValue.length === 0){
        searchedTodos = todos
    }else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
        })
        
    }

    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        saveTodos(newTodos)
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        saveTodos(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodos(newTodos)
    }

    console.log('render antes de useeffect')

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}
