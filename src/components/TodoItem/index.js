import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="rounded-lg w-full border border-slate-200 shadow-lg flex items-center p-4 my-4 justify-between">
            <div className='flex'>
                <span 
                    className={`text-lg cursor-pointer ${props.completed ? 'text-green-600': 'text-slate-300'}`}
                    onClick={props.onComplete}
                >
                    <i className="fas fa-check"></i>
                </span>
                <p className={`ml-5 ${props.completed && 'line-through'}`}>
                    {props.text}
                </p>
            </div>
            <span 
                className="text-lg cursor-pointer text-slate-400 hover:text-red-600"
                onClick={props.onDelete}
            >
                <i className="fas fa-trash"></i>
            </span>
        </li>
    );
}

export { TodoItem };