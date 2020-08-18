import React from 'react';
import BadgeDetails from '../components/BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError'

export default class BadgeDetailsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading : false,
            data : {},
            error : null,
            modalActive : false,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    handleOpenModal = (event) => {
        this.setState({modalActive : true});
    }

    handleCloseModal = (event) => {
        this.setState({modalActive : false});
    }

    deleteBadge = async () =>{
        this.setState({loading: true, error: null});
        try{
            await fetch(`/api/badges/${this.props.match.params.badgeId}`, {
                method: 'DELETE',  
            });
            this.setState({loading : false});
            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading: false, error : error})
        }
    }

    fetchData = async (event) => {
        this.setState({loading: true, error: null});
        try{
            const response = await fetch(`/api/badges/${this.props.match.params.badgeId}`)
            const data = await response.json();
            this.setState({loading : false, data : data})
            console.log(this.state.data)
        }catch(error){
            this.setState({loading: false, error : error})
        }
    }

     render(){
         if(this.state.loading === true){
             return <PageLoading/>
         }
         if(this.state.error){ 
             return <PageError error={this.state.error}/>
         }
         return(
             <BadgeDetails 
             badge={this.state.data} 
             modalActive={this.state.modalActive} 
             onOpenModal={this.handleOpenModal} 
             onCloseModal={this.handleCloseModal} 
             deleteBadge={this.deleteBadge}/>
         )
     }
}