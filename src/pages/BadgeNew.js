import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import './styles/BadgeNew.css';
import logo from '../images/platziconf-logo.svg'


class BadgeNew extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="BadgeNew__hero">
                <img className="img-fluid" alt="Logo" src={logo}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge
                        firstName="Andrés"
                        lastName="Betancourth"
                        avatarUrl="https://lh3.googleusercontent.com/ogw/ADGmqu-GgFLJjUzF9-44BjI_4nsDTQpZE8B8IkPVI81CRf-o6YckShMsgIWJBLkKtFuwb5mvsa4eMbTqL4tk8eivXuE-OcLzui15_JrMXUNLAxd4D1lbxgJyaJ6hFzB8CBkmzyrDZrDpqo3XdnM_z9dZopnhHql7nnjH6j_CKYAZxqXxXcXstJmERG6kmBh3UlfZ9OqknhT7XKm5JUsXfz6qS8Q4uvNaA6z55WHvezHqrhvk9LuSUqQalfe1gj1Bpu83vnzSkp744tCGP0UBvkiubC1lpC99X5p4H-6fjFt6ThYxtbu19PZe2TgOxjIMFCD2j4ygatcopVqx5-AUYs9tIozSJZtODx0gRqZdQDdel-SyTl8teTPmxGpL_oo7c93cM_7nDmZgB5oMLs3ztG_AVyoINFaWbyvVZlY5Ntv90zqOA4ne3W9KN1LjU5fTZYCQKI7lMYW6r_yeRP0Gu9ipFp6iQlom8j1S4mwtNTjQGm3wnklxzTfECxCLWIYz8aUeVg4V8FDvvE0m5Z3Q8WHFjzTA9k1YL0csZHVzkBPl5f4-JGg4wQVyakZHpinCo0rQmE9DRnK2EcGRTykyOebzJTVtLjwK96YY1Ensu-o3TNahtV6ic7PYd750uwqeCD1IwSc4hvNKx6erKZugBTzjntof=s83-c"
                        jobTitle="Front-End Developer"
                        twitter="andbetancourt"/>
                    </div>
                </div>
            </div>
           
            </div>
          
        )
    }
}

export default BadgeNew;