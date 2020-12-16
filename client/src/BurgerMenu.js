import React from "react";
import { stack as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/about">
                About
            </a>
            <a className="menu-item" href="/vorteile">
                Angebot
            </a>
            <a className="menu-item" href="/repertoire">
                Repertoire
            </a>
            <a className="menu-item" href="/aufnahmen">
                Aufnahmen
            </a>
            <a className="menu-item" href="/kontakt">
                Kontakt
            </a>
            <a className="menu-item" href="/links">
                Links
            </a>
        </Menu>
    );
};
