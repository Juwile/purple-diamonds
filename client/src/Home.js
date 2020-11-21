import React from 'react';
import img1 from './pictures/purple-diamonds.jpg'
import img3 from './pictures/piano-qd.jpg'
import img2 from './pictures/repertoire.jpg'

export default function Home() {
    return(
        <div>
        <main>
            <article className="rectangle home">
                <h1>Piano und Gesang für Ihren Event</h1>
                <p class="lead">Ob Hochzeit, Taufe oder Feier jeglicher Art! Wir freuen uns, Ihren Anlass zu einem besonderen Moment werden zu lassen und ihn musikalisch zu untermalen.</p>
                <div class="teaser-container">
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img1} alt="avatar"></img>
                    </div>
                    <h2>Über uns</h2>
                    <p class="teaser-text">Schöne Pianobegleitung und harmonische Zweistimmigkeit mit viel Herz!
                    </p>
                    <a className="button" href="/about">Mehr erfahren</a>
                  </div>
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img2} alt="avatar"></img>
                    </div>
                    <h2>Repertoire</h2>
                    <p class="teaser-text">Einzigartige und auf Ihre Wünsche abgestimmte Liedarrangements speziell für Hochzeiten.
                    </p>
                    <a className="button" href="/repertoire">Mehr Infos</a>
                  </div>
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img3} alt="avatar"></img>
                    </div>
                    <h2>Aufnahmen</h2>
                    <p class="teaser-text">Hörprobe gefällig? Stöbern Sie durch unsere Aufnahmen und machen Sie sich ein Bild.
                    </p>
                    <a className="button" href="/aufnahmen">Jetzt reinhören</a>
                  </div>
                </div>
            </article>
        </main>
        </div>
    );
}
