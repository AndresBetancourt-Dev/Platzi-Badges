import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

const Modal = (props) => {
    if(!props.isOpen){
        return null;
    }
    return (
        ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button className="Modal__exit btn btn-danger" onClick={props.onCloseModal}>X</button>
                {props.children}
            </div>
        </div>
        
        ,document.getElementById('modal'))
    )
}

export default Modal;