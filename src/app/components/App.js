import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import LandingPage from '../pages/LandingPage';


function App(){
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
            </Switch>
        </Layout>
        </BrowserRouter>
    )
};

export default App;