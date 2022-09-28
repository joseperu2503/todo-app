import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';

function TodoSearch() {

    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    const clear = () => {
        setSearchValue('')
    }

    return (
        <React.Fragment>
            <div className='flex justify-center'>
                <div className='flex w-2/3 bg-white rounded-md py-2 px-4 items-center'>
                    <input 
                        className="w-full outline-none" 
                        placeholder="Buscar"
                        value={searchValue}
                        onChange={onSearchValueChange}
                    />
                    {searchValue.length > 0 ? 
                        <i class="fas fa-times text-slate-400 cursor-pointer hover:text-blue-700" onClick={clear}></i>
                    : 
                        <i class="fas fa-search text-slate-400"></i>
                    }
                    
                </div>
                
            </div>
            
        </React.Fragment>
    );
}

export { TodoSearch };