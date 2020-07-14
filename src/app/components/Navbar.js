import React from 'react';
import './styles/Navbar.css';

/*
Simple undestandable component that it's pure HTML, except by the src at the image
it recieves a variable logo as source
*/
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href="/">
                        <img className="Navbar__brand-logo" src="/assets/images/logo.svg" alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;