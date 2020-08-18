import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import LandingPage from '../pages/LandingPage';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';


function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
                <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
    )
};

export default App;