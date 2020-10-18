import React from 'react';
import { NavLink } from 'react-router-dom';
import './default.css';
import img from './logo.jpg'

import Contents from "./Contents.js";

function NavBar() {
    return(
        <div>
            <header>
                <NavLink to="/home"><img src={img} alt="Logo" className="logo"/></NavLink>
                <nav>
                    <ul className="nav-ul">
                        <li className="nav-li"><NavLink to="/about">About</NavLink></li>
                        <li className="nav-li"><NavLink to="/repertoire">Repertoire</NavLink></li>
                        <li className="nav-li"><NavLink to="/aufnahmen">Aufnahmen</NavLink></li>
                        <li className="nav-li"><NavLink to="/kontakt">Kontakt</NavLink></li>
                    </ul>
                </nav>

            </header>
        </div>
    );
}

function Footer() {
    return(
        <div>
            <footer>
            <p>Footer Text</p>
            </footer>
        </div>
    );
}

export default function App() {
    return(
        <div className="background">
            <NavBar />
            <Contents />
            <Footer />
        </div>
    );
}
