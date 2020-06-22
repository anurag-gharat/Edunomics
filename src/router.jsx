import { Switch, Route } from 'react-router';
import React from 'react';

 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path='/' />
        <Route path='/knowmore' />
        <Route path='/applynow' />
        <Route path='/search' />
        <Route /> // No-match case
    </Switch>
);