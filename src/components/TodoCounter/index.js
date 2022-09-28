import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos}) {
    return(
        <h2 className="text-white text-center mt-8 text-2xl text-bold">Has Completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter }