import React from "react";

function TodoHeader({children,loading}){
    

    return(
        <header className='w-full bg-blue-700 py-10 rounded-b-3xl mb-8'>
            {React.Children.toArray(children).map(child => React.cloneElement(child, { loading })) }
        </header>
    )
}

export { TodoHeader }