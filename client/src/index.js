import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './default.css';
import App from './App';

const element = (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(element, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}