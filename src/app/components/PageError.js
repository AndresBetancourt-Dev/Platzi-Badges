import React from 'react';
import './styles/PageError.css';

function PageError(props){
    return (
        <div className="PageError">
            <h3 className="text-danger">There was an error : {props.error.message}</h3>
        </div>
    )
}


export default PageError;