import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';


class BadgeNew extends React.Component{
    //Something really important about react it's the State of it's components i can sync
    //Data across component with it's state
    //So  right now im defining it's state with an inner object called form that has 4 attributes
    //They all start blank but all of this properties will be change by the input values from BadgeForm component
    state = {
        form : {
            firstName : '',
            lastName : '',
            jobTitle : '',
            twitter : ''
        }
    }

    //So i have the same function that recieves an event and each event has a target
    //The target has name, and value, so i deconstruct this attributes from it and set local variables upon them
    handleChange = e => {

        const {name,value} = e.target;
        //So the setState it's the setter for my state object that manipulates the data
        this.setState({
            //In this case i'm saying that the inner form inherits the older values with the propagation operator, and
            //the name that's sync to be the attributes from the object will get the value from the target in this case the inputs
            form: {
                ...this.state.form,
                [name]: value,
            }
        })
    }

    render(){
        return(
            <React.Fragment>
            <div className="BadgeNew__hero d-flex justify-content-center">
                <img className="img-fluid" alt="Logo" src="../assets/images/platziconf-logo.svg"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <Badge
                        firstName={this.state.form.firstName}
                        lastName={this.state.form.lastName}
                        avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu-GgFLJjUzF9-44BjI_4nsDTQpZE8B8IkPVI81CRf-o6YckShMsgIWJBLkKtFuwb5mvsa4eMbTqL4tk8eivXuE-OcLzui15_JrMXUNLAxd4D1lbxgJyaJ6hFzB8CBkmzyrDZrDpqo3XdnM_z9dZopnhHql7nnjH6j_CKYAZxqXxXcXstJmERG6kmBh3UlfZ9OqknhT7XKm5JUsXfz6qS8Q4uvNaA6z55WHvezHqrhvk9LuSUqQalfe1gj1Bpu83vnzSkp744tCGP0UBvkiubC1lpC99X5p4H-6fjFt6ThYxtbu19PZe2TgOxjIMFCD2j4ygatcopVqx5-AUYs9tIozSJZtODx0gRqZdQDdel-SyTl8teTPmxGpL_oo7c93cM_7nDmZgB5oMLs3ztG_AVyoINFaWbyvVZlY5Ntv90zqOA4ne3W9KN1LjU5fTZYCQKI7lMYW6r_yeRP0Gu9ipFp6iQlom8j1S4mwtNTjQGm3wnklxzTfECxCLWIYz8aUeVg4V8FDvvE0m5Z3Q8WHFjzTA9k1YL0csZHVzkBPl5f4-JGg4wQVyakZHpinCo0rQmE9DRnK2EcGRTykyOebzJTVtLjwK96YY1Ensu-o3TNahtV6ic7PYd750uwqeCD1IwSc4hvNKx6erKZugBTzjntof=s83-c"
                        jobTitle={this.state.form.jobTitle}
                        twitter={this.state.form.twitter}/>
                    </div>
                    <div className="col-12 col-md-6">
                    <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                    </div>
                </div>
            </div>
           
            </React.Fragment>
        )
        //Here i'm returning an Component
        //That it's using three components Badge, BadgeForm and Navbar
        //In the case of Badge form, the props being passed are the ones that are allocated in the state.form of this component
        //The onChange prop on BadgeForm it's gettin passed the handleChange function from this Component and also a custom prop called formValues we are passing the state.form throught it to the form
        //That syncs all the data, and whatever we write on an input will be automatically changed on the other component
        //That's the magic of React
    }
}

export default BadgeNew;