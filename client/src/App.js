import React from 'react';
import { NavLink } from 'react-router-dom';
import './default.css';
import img from './logo.svg'
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
                        <li className="nav-li"><NavLink to="/vorteile">Angebot</NavLink></li>
                        <li className="nav-li"><NavLink to="/repertoire">Repertoire</NavLink></li>
                        <li className="nav-li"><NavLink to="/aufnahmen">Aufnahmen</NavLink></li>
                        <li className="nav-li"><NavLink to="/kontakt">Kontakt</NavLink></li>
                        <li className="nav-li"><NavLink to="/links">Links</NavLink></li>
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
            <p>Purple Diamonds  |  <a href="mailto:purple.d.music@gmail.com">purple.d.music@gmail.com</a></p>
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
