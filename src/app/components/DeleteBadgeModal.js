import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props){
    return(
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
            <h1>Are you sure?</h1>
            <p>You're about to delete a badge, this action cannot be undone.</p>
            <button onClick={props.onCloseModal} className="btn btn-success">Cancel</button>
            <button onClick={props.deleteBadge} className="btn btn-danger">Delete</button>
        </Modal>
    )
}

export default DeleteBadgeModal;