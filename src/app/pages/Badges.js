import React from 'react';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import MiniLoader from '../components/MiniLoader';
import './styles/Badges.css'
import { Link } from 'react-router-dom';
import PageError from '../components/PageError';

class Badges extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            error : null,
            data : []
        }
    }


    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.fetchData() 
        },5000) 
    }

    fetchData = async () =>{
        this.setState({loading: true, error : null})
        try{
            const response = await fetch(`/api/badges`);
            const data = await response.json();
            this.setState({loading : false, data : data})
        }catch(error){
            this.setState({loading : false, error: error})
        }
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    componentDidUpdate(prevProps,prevState){
    }

    addBadgeButton(){
        if(this.thereIsData()){
            return(
                <Link to="/badges/new" className="btn btn-success">Add Badge</Link>
            )
        }
        return null;
    }

    thereIsData(){
        return (this.state.data.length>0);
    }

    
    render(){
            if(this.state.loading === true && !this.thereIsData()){
                return (
                    <PageLoading/>
                )
            }
            if(this.state.error){
                return <PageError error={this.state.error}/>
            }
            return(
                <React.Fragment>
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img src="/assets/images/badge-header.svg" alt="Conf Logo"/>
                            </div>
                        </div>
                        <div className="Badges__container">
                            {this.state.loading && <MiniLoader/>}
                            <div className="Badges__buttons">
                                {this.addBadgeButton()}
                            </div>
                                <BadgesList badges={this.state.data}/>
                        </div>
                </React.Fragment>
            )
        
    }
}

export default Badges;