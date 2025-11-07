import React from 'react';
import img1 from './pictures/portrait-beide-hell-q.jpg'
import img2 from './pictures/piano.jpg'
import img3 from './pictures/aufnahmen.jpg'

export default function Home() {
    return(
        <div>
        <main>
            <article className="rectangle home">
                <h1>Piano und Gesang für Deinen Event</h1>
                <p class="lead">Ob Hochzeit, Taufe oder Feier jeglicher Art! Wir freuen uns, Deinen Anlass zu einem unvergesslichen Moment zu machen – mit Musik, die von Herzen kommt.</p>
                <div class="teaser-container">
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img1} alt="avatar"></img>
                    </div>
                    <h2>Über uns</h2>
                    <p class="teaser-text">Schöne Pianobegleitung und harmonische Zweistimmigkeit mit viel Herz!
                    </p>
                    <a className="button" href="/ueber-uns">Mehr erfahren</a>
                  </div>
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img3} alt="avatar"></img>
                    </div>
                    <h2>Aufnahmen</h2>
                    <p class="teaser-text">Hörprobe gefällig? Stöbere durch unsere Aufnahmen und mach dir selbst ein Bild.
                    </p>
                    <a className="button" href="/aufnahmen">Jetzt reinhören</a>
                  </div>
                  <div class="teaser">
                    <div class="diamond">
                      <img src={img2} alt="avatar"></img>
                    </div>
                    <h2>Repertoire</h2>
                    <p class="teaser-text">Einzigartige Liedarrangements – individuell auf deine Wünsche abgestimmt, speziell für Hochzeiten.
                    </p>
                    <a className="button" href="/repertoire">Mehr Infos</a>
                  </div>

                </div>
            </article>
        </main>
        </div>
    );
}
