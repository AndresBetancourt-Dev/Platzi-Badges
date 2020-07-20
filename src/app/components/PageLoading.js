import React from 'react';
import Loader from './Loader';
import './styles/PageLoading.css';


function PageLoading(props){
    return(
        <div className="PageLoading">
            <Loader/>
        </div>
    )
}

export default PageLoading;