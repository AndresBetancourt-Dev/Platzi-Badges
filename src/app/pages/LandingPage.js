import React from 'react';
import {Link} from 'react-router-dom';
import './styles/LandingPage.css';
function LandingPage(props){
    return (
        <div className="LandingPage">
            <div className="LandingPage__content">
                <img src="/assets/images/platziconf-logo.svg" alt="PlatziConf Logo"/>
                <h1 className="text-light text-align-center font-weight-light">Badge Management System</h1>
                <Link to="/badges" className="btn btn-success p-3">Start</Link>
            </div>
            <div className="LandingPage__image">
                <img src="/assets/images/astronauts.svg" alt="Astronauts"/>
            </div>
        </div>
    )
}

export default LandingPage;