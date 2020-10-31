import React from 'react';
import { NavLink } from 'react-router-dom';
import './default.css';
import img from './logo.jpg'
import BurgerMenu from "./BurgerMenu.js";


import Contents from "./Contents.js";

function NavBar() {
    return(
        <div>
            <header>
                <NavLink to="/home"><img src={img} alt="Logo" className="logo"/></NavLink>
                <nav className="navBar">
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
        <div className="burger-container"><BurgerMenu /></div>
          <div id="page-wrap">
            <NavBar />
            <Contents />
            <Footer />
          </div>
        </div>
    );
}
