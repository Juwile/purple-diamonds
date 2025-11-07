import React from 'react';
import './default.css';
import equipment from './pictures/gesang-piano.jpg'

export default function Events() {
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
  
