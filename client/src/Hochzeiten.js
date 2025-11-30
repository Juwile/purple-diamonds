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
            Wir begleiten euren grossen Tag mit Live-Musik – bei der Trauung, beim
            Apéro oder als stimmungsvolles Highlight am Abend.
          </p>
          <p className="lead">
            Wenn ihr euch für die Zeremonie etwas ganz Persönliches wünschst,
            bieten wir auch eine Kombination aus Traurede und Live-Musik an – ein
            harmonisches Gesamtpaket, das Emotionen weckt und lange in Erinnerung
            bleibt.
          </p>

          {/* SECTION — Alle Angebote */}
          <section id="angebote" className="section">
            <h2>Unsere Angebote rund um eure Hochzeit</h2>
            <p>
              Wähle das passende Angebot für deinen besonderen Tag. Alle Auftritte sind 100 % live, stilvoll und mit viel Herz
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
                    <strong>Preis:</strong> ab CHF 2'190.–
                  </p>
                  
                </div>
              </div>

              {/* Card 2: Musik an der Trauung */}
              <div className="card">
                <h3>Musik an der Zeremonie</h3>
                <p>
                  Live-Gesang und Klavier für die Zeremonie – vom Einzug über den
                  Ringtausch bis zum Auszug. Wir gestalten die Musik ganz nach euren
                  Wünschen.
                </p>
                <ul className="bullets">
                  <li>Individuelle Liedauswahl</li>
                  <li>100 % live – kein Playback</li>
                  <li>Auf Wunsch eigene Songs – euer Lieblingslied neu einstudiert oder komplett neu komponiert</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF 790.–
                  </p>
                  
                </div>
              </div>

              {/* Card 3: Musik am Apéro */}
              <div className="card">
                <h3>Musik am Apéro</h3>
                <p>
                  Dezente Melodien im Hintergrund – romantisch, warm und perfekt, um euer Apéro stilvoll zu begleiten.
                </p>
                <ul className="bullets">
                  <li>Pop, Mundart & Balladen aus unserem Repertoire</li>
                  <li>Setdauer flexibel (z.B. 3 × 30 Minuten) aufgeteilt auf 2h</li>
                  <li>Beschallung angepasst an eure Location – drinnen wie draussen</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF 990.–
                  </p>
              
                </div>
              </div>

              {/* Card 4: Kombi Trauung & Apéro */}
              <div className="card">
                <h3>Kombi: Trauung & Apéro</h3>
                <p>
                  Zeremonie und Apéro aus einer Hand – schön aufeinander abgestimmt, unkompliziert und für dich ganz entspannt.
                </p>
                <ul className="bullets">
                  <li>Trauung + Apéro-Sets</li>
                  <li>Ein Ansprechpartner, ein Aufbau</li>
                  <li>Preisvorteil gegenüber Einzelbuchung</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis Paket:</strong> ab CHF 1'290.–
                  </p>
                  
                </div>
              </div>

              {/* Card 5: Musik am Abend */}
              <div className="card">
                <h3>Musik am Abend</h3>
                <p>
                  Ruhige Dinner-Musik oder stimmungsvolle Live-Sets am Abend – wir
                  schaffen Atmosphäre, die euren Ausklang besonders macht.
                </p>
                <ul className="bullets">
                  <li>Individuelle Sets, auch Instrumental möglich</li>
                  <li>Setdauer flexibel (z.B. 3 × 30 Minuten) aufgeteilt auf 2h</li>
                  <li>Individuelle Songwünsche möglich</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF 990.–
                  </p>
                 
                </div>
              </div>
              <div className="card">
                <h3>Musik als Geschenk</h3>
                <p>
                Eine persönliche musikalische Einlage als besonderes Geschenk für das Brautpaar – berührend und unvergesslich.
                </p>
                <ul className="bullets">
                  <li>Überraschungsmoment garantiert – ob am Apéro oder am Abend</li>
                  <li>Möchtest du gemeinsam mit uns ein Lied singen? Wir bereiten alles zusammen vor und begleiten dich sicher durch den Auftritt</li>
                </ul>
                <div className="pricebox">
                  <p>
                    <strong>Preis:</strong> ab CHF 790.–
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Technik & Extra */}
            <div className="feature-block">
              <h2>Im Preis inbegriffen</h2>
              <h3>Vorgespräch Zeremonie</h3>
              <p>Ein persönliches Vorgespräch ist bei uns immer inbegriffen – egal, ob ihr "nur" Musik an der Trauung bucht oder unser Kombi-Angebot mit Traurede nutzt. Bei der Variante mit Traurede findet je nach Bedarf sogar ein zweites Treffen statt.</p>
              <p>Uns ist wichtig, euch als Paar kennenzulernen: eure Geschichte, euren Stil und eure Wünsche. So können wir euch individuell beraten und dafür sorgen, dass wir uns nicht erst am Hochzeitstag zum ersten Mal sehen. Durch diesen Austausch entsteht eine entspannte Basis und wir können die Musik perfekt auf euch abstimmen.</p>
              <p>Dank über 10 Jahren Erfahrung geben wir euch auch Tipps zum Ablauf der Zeremonie. Gemeinsam hören wir uns Auszüge aus unserem Repertoire an und wählen aus, was wirklich zu euch passt.</p>
              <p>Wünscht ihr euch ein Lied, das nicht in unserem Repertoire ist, studieren wir es gerne für euch ein. Dafür berechnen wir einen Zuschlag von CHF 50.              
              </p>
              <h3>Equipment </h3>
              <p>
                Klangvoll – egal, wo du feierst. Wir bringen unser E-Piano und eine vollständige Soundanlage mit und
                passen uns flexibel an jede Umgebung an – drinnen wie draussen. Eine
                Stromquelle genügt – und wir sind startklar.
              </p>
              <h3>Fahrspesen </h3>
              <p>
                Im Kanton Freiburg und Bern sind die Fahrspesen inbegriffen. Für weitere Distanzen berechnen wir 1 CHF pro Kilometer.
              </p>
            </div>
          </section>

          {/* Abschluss-CTA */}
          <section className="section section-cta">
            <h2>Bereit für euren besonderen Moment?</h2>
            <p className="lead">
              Wir freuen uns, eure Geschichte in Musik und Worten zum Leben zu
              erwecken.
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
