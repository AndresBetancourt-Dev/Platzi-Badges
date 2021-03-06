import React from 'react'; //Importing the React library from the node_modules
import './styles/Badge.css'; //Importing stylings from this directory named styles
import Gravatar from './Gravatar'; 
//Importing an svg from the parent directory that's allocated in a folder called images

//I create an object (that now it's going to be called a React Component) called Badge that Extends React Component object
class Badge extends React.Component{
    //All react objects have this default method called render() that returns HTML
    render(){
        return(
            //So basically i return an html with the stylings from the Bagde.css file
            //And also to pass the class name and set up the stylings i simply uses the props or attribute -> className instead of class
            //It's because i already used the reserved word class when creating my React Component
            <div className="Badge">
                <div className="Badge__header">
                    <img src="/assets/images/badge-header.svg" alt="Logo de la Conferencia" /> 
                </div>

                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} />
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <p>@{this.props.twitter}</p>    
                </div>
                <div className="Badge__footer">
                  #platziconf  
                </div>
            </div>
        )
        /*
        I can give the props the name i want and if i'm going to use a props or any js code value
        i simply use the {} brackets and insert JS Code inside it
        */
    }
}

//I export the react component by default
export default Badge;