import React from 'react';
import { stack as Menu } from 'react-burger-menu';

export default function BurgerMenu() {
  return (
    <Menu>
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="/angebot">Angebot</a>
      <a className="menu-item" href="/ueber-uns">Über uns</a>
      <a className="menu-item" href="/repertoire">Repertoire</a>
      <a className="menu-item" href="/aufnahmen">Aufnahmen</a>
      <a className="menu-item" href="/kontakt">Kontakt</a>
      <a className="menu-item" href="/links">Links</a>
    </Menu>
  );
}
