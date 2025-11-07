import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.js';
import Repertoire from './Repertoire.js';
import Kontakt from './Kontakt.js';
import About from './About.js';
import Aufnahmen from './Aufnahmen.js';
import Vorteile from './Events.js';
import Links from './Links.js';
import Hochzeiten from './Hochzeiten.js';
import Events from './Events.js';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
    return(
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={Home} />
            <Route path="/ueber-uns" component={About} />
            <Route path="/hochzeiten" component={Hochzeiten} />
            <Route path="/events" component={Events} />
            <Route path="/repertoire" component={Repertoire} />
            <Route path="/aufnahmen" component={Aufnahmen} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/links" component={Links} />
            <Route component={NotFound} />
        </Switch>
    );
}
