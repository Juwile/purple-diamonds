import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.js';
import Repertoire from './Repertoire.js';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
    return(
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={Home} />
            <Route path="/repertoire" component={Repertoire} />
            <Route component={NotFound} />
        </Switch>
    );
}
