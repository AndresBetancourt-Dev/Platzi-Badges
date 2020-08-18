import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgeList.css';
import Gravatar from './Gravatar'

class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="BadgeList__item">
                    <div className="BadgeList__item--img">
                         <Gravatar email={this.props.badge.email} />
                    </div>
                    <div className="BadgeList__item--details">
                        <div className="font-weight-bold">{this.props.badge.firstName} {this.props.badge.lastName}</div>
                        <div>{this.props.badge.twitter}</div>
                        <div>{this.props.badge.jobTitle}</div>
                    </div>
                                
            </div>
        )
    }
}

function BadgesList(props){
        const badges = props.badges;
    
    
        if(badges.length === 0){
            return (
                <div>
                    <h3 className="text-center text-success p-5">We didn't Found a Badge</h3>
                    <Link to="/badges/new" className="w-100 btn btn-success">Create a Badge</Link>
                </div>
            )
        }
        return(
            <div className="Badge__list">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="Badges__container">
                     <ul className="list-unstyled">
                    {badges.map((badge)=>{
                        return (
                        <li key={badge._id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge._id}`}>
                            <BadgesListItem badge={badge}/>
                            </Link>
                            
                        </li>
                        )
                        })} 
                     </ul>
                </div>
            </div>
        )
    
}

export default BadgesList;