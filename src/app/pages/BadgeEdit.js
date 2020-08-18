import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import './styles/BadgeEdit.css';


class BadgeEdit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading : false,
            form : {
                firstName : '',
                lastName : '',
                jobTitle : '',
                twitter : '',
                email : '',
                avatarUrl : 'something'
            },
            error : null
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async (event) => {
        this.setState({loading: true, error: null});
        try{
            const response = await fetch(`/api/badges/${this.props.match.params.badgeId}`)
            const data = await response.json();
            this.setState({loading : false, form : data})
            console.log(this.state.form)
        }catch(error){
            this.setState({loading: false, error : error})
        }
    }

    handleChange = e => {
        const {name,value} = e.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value,
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const data = this.state.form;
        this.setState({loading: true, error : null})
        try{
            await fetch(`/api/badges/${this.props.match.params.badgeId}`, {
                method: 'PUT', 
                body: JSON.stringify(data), 
                headers:{
                  'Content-Type': 'application/json'
                }
              })
              this.setState({loading: false})
              this.props.history.push('/badges')
        }catch(error){
            this.setState({loading : false, error : error})
        }
    }

    render(){
        if(this.state.loading === true){
            return (<PageLoading/>)
        }
        return(
            <React.Fragment>
            <div className="BadgeNew__hero d-flex justify-content-center">
                <img className="img-fluid" alt="Logo" src="/assets/images/platziconf-logo.svg"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <Badge
                        firstName={this.state.form.firstName || `First Name`}
                        lastName={this.state.form.lastName || `Last Name`}
                        avatarUrl={this.state.form.avatarUrl}
                        jobTitle={this.state.form.jobTitle || `Job Title`}
                        twitter={this.state.form.twitter || `Twitter`}
                        email={this.state.form.email || `email@example.com`}   
                        />
                    </div>
                    <div className="col-12 col-md-6">
                    <h1 className="text-align-center">Edit Attendant</h1>
                    <BadgeForm onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}  
                    />
                    </div>
                </div>
            </div>
           
            </React.Fragment>
        )
    }
}

export default BadgeEdit;