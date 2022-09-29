import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue,loading}) {

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
                <div className={`flex w-2/3 bg-white rounded-md py-2 px-4 items-center ${loading && 'cursor-wait'}`}>
                    <input 
                        className={`w-full outline-none ${loading && 'cursor-wait'}` }
                        placeholder="Buscar"
                        value={searchValue}
                        onChange={onSearchValueChange}
                        disabled={loading}
                    />
                    {searchValue.length > 0 ? 
                        <i className="fas fa-times text-slate-400 cursor-pointer hover:text-blue-700" onClick={clear}></i>
                    : 
                        <i className="fas fa-search text-slate-400"></i>
                    }
                    
                </div>
                
            </div>
            
        </React.Fragment>
    );
}

export { TodoSearch };