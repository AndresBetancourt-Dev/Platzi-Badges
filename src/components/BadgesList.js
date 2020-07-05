import React from 'react';
import './styles/BadgeList.css';

class BadgesListItem extends React.Component{
    render(){
        return(
            <div className="BadgeList__item">
                    <div className="BadgeList__item--img">
                         <img src={this.props.badge.avatarUrl} alt="Badge Avatar"></img>
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

class BadgesList extends React.Component{
    render(){
        return(
            <div className="Badge__list">
                <div className="Badges__container">
                     <ul className="list-unstyled">
                    {this.props.badges.map((badge)=>{
                        return (
                        <li key={badge.id}>
                            <BadgesListItem badge={badge}/>
                        </li>
                        )
                        })}; 
                     </ul>
                </div>
            </div>
        )
    }
}

export default BadgesList;