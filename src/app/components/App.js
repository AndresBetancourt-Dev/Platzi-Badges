import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';


function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Badges}/>
                <Route exact path="/badges/" component={BadgeNew}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;