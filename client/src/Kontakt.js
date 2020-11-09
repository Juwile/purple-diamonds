import React from 'react';
import './default.css';

export default function Kontakt() {
    return(
        <div>
        <main>
            <article className="rectangle">
            <iframe class="hide-on-small" src="https://docs.google.com/forms/d/e/1FAIpQLSfcvlskqOm0I0OUCy-u00grZ61T9Zm8LYpr8hpZPgPcQsJ7vg/viewform?embedded=true" width="640" height="808" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
            <iframe class="hide-on-large"src="https://docs.google.com/forms/d/e/1FAIpQLSfcvlskqOm0I0OUCy-u00grZ61T9Zm8LYpr8hpZPgPcQsJ7vg/viewform?embedded=true" width="280" height="1200" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
            </article>
        </main>
        </div>
    );
}

/*<form id="kontakt">
    <label for="Vorname">Vorname:</label>
    <input type="text" id="Vorname" name="Vorname"/>
    <label for="Nachname">Nachname:</label>
    <input type="text" id="Nachname" name="Nachname"/>
    <label>Anfrage:</label>
    <textarea type="text" id="Anfrage" name="Anfrage"/>
    <button class="button">Absenden</button>
  </form>*/
