import React from 'react';
import './default.css';
import equipment from './pictures/gesang-piano.jpg'

export default function Hochzeiten() {
  return (
    <div>
      <main>
        <article className="rectangle">
          {/* Lead */}
          <h1>Musik, Worte und Emotion</h1>

          <p className="lead">
            Wir begleiten deinen grossen Tag mit Live-Musik – bei der Trauung, beim
            Apéro oder als stimmungsvolles Highlight am Abend.
          </p>
          <p className="lead">
            Wenn du dir für deine Zeremonie etwas ganz Persönliches wünschst,
            bieten wir auch eine Kombination aus Traurede und Live-Musik an – ein
            harmonisches Gesamtpaket, das Emotionen weckt und lange in Erinnerung
            bleibt.
          </p>
          <p className="lead">
            So entsteht ein Moment, der euch wirklich widerspiegelt – echt,
            individuell und mit Herz.
          </p>

          {/* SECTION — Alle Angebote */}
          <section id="angebote" className="section">
            <h2>Unsere Angebote rund um deine Hochzeit</h2>
            <p>
              Wähle das passende Angebot für deinen besonderen Tag – von der
              musikalischen Begleitung bis zum Gesamtpaket mit persönlicher
              Traurede. Alle Auftritte sind 100 % live, stilvoll und mit viel Herz
              gestaltet.
            </p>

            <div className="cards">
              {/* Card 1: Traurede & Musik */}
              <div className="card card-featured">
                <div className="card-badge">✨ Neu</div>
                <h3>Traurede & Live-Musik</h3>
                <p>
                  Das Highlight für eure Zeremonie: individuell verfasste Traurede,
                  kombiniert mit emotionaler Live-Musik – alles aus einer Hand.
                </p>
                <ul className="bullets">
                  <li>Persönliche Rede (inkl. Vorgespräch)</li>
                  <li>Live-Gesang & Klavierbegleitung</li>
                  <li>Abgestimmte Liedauswahl</li>
                  <li>Technik inklusive (E-Piano & Soundanlage)</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Gesamtpaket:</strong> ab CHF ___
                  </p>
                  <a className="btn btn-primary" href="/kontakt">
                    Jetzt anfragen
                  </a>
                </div>
              </div>

              {/* Card 2: Musik an der Trauung */}
              <div className="card">
                <h3>Musik an der Trauung</h3>
                <p>
                  Live-Gesang und Klavier für die Zeremonie – vom Einzug über den
                  Ringtausch bis zum Auszug. Wir gestalten die Musik ganz nach euren
                  Wünschen.
                </p>
                <ul className="bullets">
                  <li>Individuelle Liedauswahl</li>
                  <li>100 % live – kein Playback</li>
                  <li>Technik inklusive</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF ___
                  </p>
                  <a className="btn" href="/kontakt">
                    Anfrage senden
                  </a>
                </div>
              </div>

              {/* Card 3: Musik am Apéro */}
              <div className="card">
                <h3>Musik am Apéro</h3>
                <p>
                  Beschwingte Live-Musik als stilvoller Rahmen für euren Empfang –
                  dezent im Hintergrund oder mit kleinen Highlights, ganz wie ihr
                  möchtet.
                </p>
                <ul className="bullets">
                  <li>Pop, Soul, Jazz & romantische Balladen</li>
                  <li>Setdauer flexibel (z. B. 2 × 40 Minuten)</li>
                  <li>Dezentes Setup & schneller Aufbau</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF ___
                  </p>
                  <a className="btn" href="/kontakt">
                    Anfrage senden
                  </a>
                </div>
              </div>

              {/* Card 4: Kombi Trauung & Apéro */}
              <div className="card">
                <h3>Kombi: Trauung & Apéro</h3>
                <p>
                  Zeremonie und Apéro musikalisch begleitet – alles aus einer Hand
                  und perfekt aufeinander abgestimmt. Harmonisch, professionell und
                  stressfrei.
                </p>
                <ul className="bullets">
                  <li>Trauung + Apéro-Sets</li>
                  <li>Ein Ansprechpartner, ein Aufbau</li>
                  <li>Preisvorteil gegenüber Einzelbuchung</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis Paket:</strong> ab CHF ___
                  </p>
                  <a className="btn" href="/kontakt">
                    Anfrage senden
                  </a>
                </div>
              </div>

              {/* Card 5: Musik am Abend */}
              <div className="card">
                <h3>Musik am Abend</h3>
                <p>
                  Sanfte Dinner-Musik oder stimmungsvolle Live-Sets am Abend – wir
                  schaffen Atmosphäre, die euren Ausklang besonders macht.
                </p>
                <ul className="bullets">
                  <li>Dinner- oder Lounge-Sets</li>
                  <li>Repertoire flexibel erweiterbar</li>
                  <li>Individuelle Songwünsche möglich</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF ___
                  </p>
                  <a className="btn" href="/kontakt">
                    Anfrage senden
                  </a>
                </div>
              </div>
            </div>

            {/* Technik & Extra */}
            <div className="feature-block">
              <h4>Klangvoll – egal, wo du feierst</h4>
              <p>
                Wir bringen unser E-Piano und eine vollständige Soundanlage mit und
                passen uns flexibel an jede Umgebung an – drinnen wie draussen. Eine
                Stromquelle genügt – und wir sind startklar.
              </p>

              <h4>Dein Hochzeitslied – individuell komponiert</h4>
              <p>
                Auf Wunsch komponieren wir euer persönliches Lied – einzigartig wie
                ihr. Ob mit eigenem Text oder komplett frei – so entsteht ein Song,
                der euch gehört.
              </p>
            </div>
          </section>

          {/* Abschluss-CTA */}
          <section className="section section-cta">
            <h2>Bereit für euren besonderen Moment?</h2>
            <p>
              Wir freuen uns, eure Geschichte in Musik und Worten zum Leben zu
              erwecken. Schreibt uns für ein unverbindliches Erstgespräch.
            </p>
            <a className="btn btn-primary" href="/kontakt">
              Jetzt anfragen
            </a>
          </section>
        </article>
      </main>
    </div>
  );
}
