import React from 'react';


class BadgeForm extends React.Component{
   
    //Inside my component i can create multiple methods that are called when 
    //Something is onChange or onSubmit

    //In this case the handleChange function will recieve and event
    //That event usually has a target that it's the HTML element
    handleChange = (event) =>{
        //I save in a local variable the value and the name from the event.target
        const {name,value} = event.target;
        //And here it's the most important about this but will be explain in the BadgeNew page
        this.setState({ [name] : value,})
    }

    //When i submit the form, im preventing the default action in this case reloading the screen
    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1 className="text-align-center">New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="firstName" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="lastName" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input name="jobTitle" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input name="twitter" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.twitter}/>
                    </div>
                    <button className="btn btn-success w-100">Enviar</button>
                </form>
            </div>
        )
        //For explanation, in the props onChange i will execute the onChange Method brought from another React Component and the values are being given from another prop called formValues that's a JSON object that has 4 attributes it's sync with the parent component
    }
}

export default BadgeForm;