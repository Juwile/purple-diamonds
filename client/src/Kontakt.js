import React from 'react';
import './default.css';

export default function Kontakt() {
    return(
        <div>
        <main>
            <article className="rectangle">
            <h1>Kontakt Anfrage</h1>
              <form id="kontakt">
                  <label for="Vorname">Vorname:</label>
                  <input type="text" id="Vorname" name="Vorname"/>
                  <label for="Nachname">Nachname:</label>
                  <input type="text" id="Nachname" name="Nachname"/>
                  <label>Anfrage:</label>
                  <textarea type="text" id="Anfrage" name="Anfrage"/>
                  <button class="button">Absenden</button>
                </form>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4kXwO5utrGR1Yu-FUO5dwpZfpYcQZpDrLpFc9124kos18OQ/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
            </article>
        </main>
        </div>
    );
}
