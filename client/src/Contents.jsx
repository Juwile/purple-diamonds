import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.jsx';
import Repertoire from './Repertoire.jsx';
import Kontakt from './Kontakt.jsx';
import About from './About.jsx';
import Aufnahmen from './Aufnahmen.jsx';
import Links from './Links.jsx';
import Hochzeiten from './Hochzeiten.jsx';
import Events from './Events.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
    return(
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={Home} />
            <Route path="/ueber-uns" component={About} />
            <Route path="/angebot" component={Hochzeiten} />
            <Route path="/repertoire" component={Repertoire} />
            <Route path="/aufnahmen" component={Aufnahmen} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/links" component={Links} />
            <Route component={NotFound} />
        </Switch>
    );
}
