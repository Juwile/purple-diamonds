import React from 'react';
import './default.css';
import bg from './bg-color-full.png'


export default function Repertoire() {
    return(
        <div style={{ backgroundImage:`url(${bg})`}}>
            <main>
                <article className="rectangle">
                    <h1>repertoire</h1>
                    <p className="paragraph">All of me – John Legend</p>
                    <p>All of me – John Legend</p>
                    <p>All of me – John Legend</p>
                    <p>All of me – John Legend</p>
                    <p>All of me – John Legend</p>
                    <p>All of me – John Legend</p>
                </article>
            </main>
        </div>
    );
}
