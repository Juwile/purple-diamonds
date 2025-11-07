import React from 'react';
import './default.css';
import equipment from './pictures/gesang-piano.jpg'

export default function Hochzeiten() {
    return (
      <div>
        <main>
          <article className="rectangle">
            {/* Lead */}
            <h1>Musik, Worte und Emotion – alles, was dein grosser Tag verdient.</h1>
  
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
  
            {/* Abschnitt 1: Trauung – Rede & Musik */}
            <section className="angebot-section">
              <h2>1. Trauung – Rede & Musik im Gesamtpaket</h2>
              <h3>Eure Geschichte in Wort und Klang</h3>
  
              <p>
                Wir gestalten eure Trauung persönlich und authentisch – mit einer
                individuell verfassten Traurede, begleitet von unserer Live-Musik.
              </p>
              <p>
                In einem Vorgespräch lernen wir euch kennen, hören zu und schreiben
                daraus eine Rede, die genau zu euch passt.
              </p>
              <p>
                Dazu wählen wir gemeinsam passende Lieder, die den Moment musikalisch
                abrunden – live gesungen und mit Klavier begleitet.
              </p>
              <p>
                So entsteht eine stimmige, emotionale Zeremonie, die eure Geschichte
                erzählt – unvergesslich und echt.
              </p>
  
              <p>
                Bei uns ist alles echt – 100 % live, ohne Playback oder vorproduzierte
                Begleitung. Die Klavierbegleitung macht jedes Lied einzigartig. Unsere
                Versionen gibt’s so nur bei uns!
              </p>
  
              <p>
                <strong>Preis Gesamtpaket (Traurede & Musik):</strong> ab CHF ___
              </p>
            </section>
  
            {/* Abschnitt 2: Musikalische Begleitung */}
            <section className="angebot-section">
              <h2>2. Musikalische Begleitung</h2>
              <h3>Live-Musik, die berührt</h3>
  
              <p>
                Natürlich kannst du uns auch ohne Traurede buchen – für deine
                Trauung, den Apéro oder andere festliche Anlässe. Wir sorgen mit
                Gesang und Klavier für die passende Atmosphäre – romantisch,
                feierlich oder beschwingt, ganz nach deinem Geschmack.
              </p>
              <p>
                Du wählst deine Lieblingslieder, wir arrangieren sie individuell und
                sorgen für einen harmonischen Klang, wo immer du feierst.
              </p>
  
              <h3>Klangvoll – egal, wo du feierst</h3>
              <p>
                Wir bringen unser E-Piano sowie eine vollständige Soundanlage mit und
                können uns flexibel an jede Umgebung anpassen. Egal ob drinnen oder
                draussen – wir arrangieren uns ganz nach deinen Wünschen. Alles, was
                wir brauchen, ist eine Stromquelle – dann sind wir einsatzbereit. So
                sorgen wir überall für den perfekten Klang und schaffen genau die
                Atmosphäre, die zu deinem Anlass passt.
              </p>
  
              <h3>Dein Hochzeitslied – individuell komponiert</h3>
              <p>
                Es ist uns immer eine besondere Freude, speziell für dich oder euch –
                oder für das Hochzeitspaar – ein persönliches Lied zu komponieren.
                Vielleicht hast du einen Text, den du gerne vertont hättest? Oder eine
                Melodie, die dir besonders am Herzen liegt? Gerne kannst du uns auch
                ganz freie Hand lassen – so oder so entsteht dein ganz eigenes,
                individuelles Lied.
              </p>
  
              <p>
                <strong>Preis musikalische Begleitung:</strong> ab CHF ___
              </p>
  
              <img className="img-angebot" src={equipment} alt="Equipment" />
            </section>
          </article>
        </main>
      </div>
    );
  }
  
