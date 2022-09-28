import React from "react";
import { TodoContext } from "../../TodoContext";
// import './TodoForm.css'

function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('')
    const {addTodo,setOpenModal} = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit} className="rounded-lg p-4 flex flex-col w-3/4 bg-white">
            <h2 className=" text-lg text-slate-800 mb-16">Nuevo TODO</h2>
            <textarea 
                value={newTodoValue} 
                onChange={onChange} 
                placeholder="Cortar la cebolla para el almuerzo"
                className="border rounded-md p-4 text-slate-800 outline-none focus:border-blue-500 shadow-sm"
            ></textarea>
            <div className="flex gap-4 mt-8 justify-end">
                <button
                    type="button"
                    className="py-1 px-2 text-slate-800 text-base rounded-md bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                 className="py-1 px-2 text-white text-base rounded-md bg-blue-700 hover:bg-blue-600"
                    type="submit"
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }