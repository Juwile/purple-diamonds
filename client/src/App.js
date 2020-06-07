import React from 'react';
import { NavLink } from 'react-router-dom';
import './default.css';
import img from './bg-color-full.png'

import Contents from "./Contents.js";

function NavBar() {
    return(
        <div>
            <header>
                <img src={img} alt="Logo" className="logo"/>
                <nav>
                    <ul className="nav-ul">
                        <li className="nav-li"><NavLink to="/about">about</NavLink></li>
                        <li className="nav-li"><NavLink to="/repertoire">repertoire</NavLink></li>
                        <li className="nav-li"><NavLink to="/aufnahmen">aufnahmen</NavLink></li>
                        <li className="nav-li"><NavLink to="/kontakt">kontakt</NavLink></li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

export default function App() {
    return(
        <div className="background">
            <NavBar />
            <Contents />
        </div>
    );
}