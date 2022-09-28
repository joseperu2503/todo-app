import React from "react";

function TodoHeader({children}){
    return(
        <header className='w-full bg-blue-700 py-10 rounded-b-3xl mb-8'>
            {children}
        </header>
    )
}

export { TodoHeader }