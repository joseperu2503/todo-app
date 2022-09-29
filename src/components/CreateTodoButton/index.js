import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
            className="bg-blue-700 rounded-full h-16 w-16 text-white text-2xl fixed bottom-8 right-8"
            onClick={onClickButton}
        >
            <i className="fas fa-plus"></i>
        </button>
    );
}

export { CreateTodoButton };