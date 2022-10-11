import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className='fixed bg-gray-500 bg-opacity-50 top-0 right-0 bottom-0 left-0'>
            <div className='absolute w-full flex justify-center top-1/4'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }