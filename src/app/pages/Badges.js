import React from 'react';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import './styles/Badges.css'
import { Link } from 'react-router-dom';

class Badges extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            error : null,
            data : []
        }
        console.log('Component was succesfully created')
    }


    componentDidMount(){
        this.fetchData() 
    }

    fetchData = () =>{
        this.setState({loading: true, error : null})
        try{
            const data = []
            this.setState({loading : false, data : data})
        }catch(error){

        }
    }

    componentWillUnmount(){
    }

    componentDidUpdate(prevProps,prevState){
    }

    
    render(){
            return(
                <div>
                    <Navbar/>
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img src="/assets/images/badge-header.svg" alt="Conf Logo"/>
                            </div>
                        </div>
                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <Link to="/badges" className="btn btn-success">Add Badge</Link>
                            </div>
                                <BadgesList badges={this.state.data}/>
                        </div>
                </div>
            )
        
    }
}

export default Badges;