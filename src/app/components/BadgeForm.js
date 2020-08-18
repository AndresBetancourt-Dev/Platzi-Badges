import React from 'react';


class BadgeForm extends React.Component{
    handleChange = (event) =>{
        const {name,value} = event.target;
        this.setState({ [name] : value,})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input name="firstName" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.firstName} required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input name="lastName" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.lastName} required/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input name="jobTitle" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.jobTitle} required/>
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input name="email" onChange={this.props.onChange} className="form-control" type="email" value={this.props.formValues.email} required/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input name="twitter" onChange={this.props.onChange} className="form-control" type="text" value={this.props.formValues.twitter} required/>
                    </div>
                    <button className="btn btn-success w-100">Enviar</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm;