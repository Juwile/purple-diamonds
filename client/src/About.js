import React from 'react';
import './default.css';
import tabea from './pictures/tabea_hell_bl.jpg'
import nadine from './pictures/nadine_hell_bl.jpg'



export default function About() {
    return(
        <div>
            <main>
                <article className="rectangle">

                    <h1>Zwei Senslerinnen in ihrem Element</h1>
                    <p class="lead">Wir sind beide passionierte Musikerinnen aus dem Kanton Freiburg und machen schon seit etlichen Jahren in diversen Formationen Musik. Bei Purple Diamonds verzaubern wir Sie mit Gesang und Piano Klängen.</p>
                    <h2>Tabea Kolly</h2>

                    <img class="img-about" src={tabea} alt="Tabea"></img>

                      <p>Musik. Sie begleitet mich schon seit vielen Jahren und bereitet mir immer wieder enorm viel Freude und lässt mich Gefühle und Emotionen ausdrücken. Begonnen mit dem Musizieren habe ich mit 8 Jahren. Von der Blockflöte ging es dann schnell weiter ans Konservatorium, wo ich Querflötenunterricht nahm. Zehn Jahre lang war ich dann auch Aktivmitglied in der Musikgesellschaft Plaffeien. Da ich am Kollegium Sankt Michael das Schwerpunktfach Musik belegte, entschloss ich mich, eine musikalische Maturaarbeit zu verfassen. Also versuchte ich mich zum ersten Mal im Komponieren. Das Nibelungenlied wurde mit Musik dargestellt, in dem eine Mitstudentin und ich gemeinsam Stücke in Form von Filmmusik für ein Orchester komponierten und dann auch aufführten.</p>
                      <p>Das Singen ist etwas, das ich schon immer leidenschaftlich gerne machte. Mit kleineren Bandauftritten an der Sekundarschule oder einer Rolle bei einem Schulmusical, entdeckte ich dann das Singen für mich. Mit der Freiburger Jazz Band „AIRWIN's Big Band“, die es seit 2012 gibt und ich meine ersten grösseren Bühne Erfahrungen machen durfte und immer noch darf, wurde dann auch PURPLE DIAMONDS ins Leben gerufen!</p>
                      <p>Es ist immer wieder eine grosse Freude dürfen wir mit unserer Musik Hochzeiten, Taufen oder diversen Feiern musikalisch untermalen und liebe Menschen an einem wichtigen Tag begleiten.</p>
                      <p>Ein weiteres Projekt, das Nadine und ich im Januar 2019 ins Rollen brachten, ist die Sensler Band «P(a)iste it». Aus Jamsessions mit Freunden entstand die Band, welche Covers in viele unterschiedliche Richtungen wie unter anderem Indie, Country, Folk, Pop, Rock machen.</p>
                      <p class="last-p">Ich freue mich auf alle musikalischen Herausforderungen, die noch auf mich warten und bin gespannt, wohin mich der Wind trägt.</p>

                    <h2>Nadine Mülhauser</h2>
                    <img class="img-about " src={nadine} alt="Nadine"></img>
                      <p>Ähnlich wie bei Tabea hat mich die Musik schon mein ganzes Leben lang begleitet. Bereits als Kleinkind klimperte ich auf einem Mini-Keyboard. In der Primarschule habe ich dann voller Vorfreude mit dem Klavierunterricht am Konservatorium Freiburg begonnen. Nach 6 Jahren klassischem Unterricht, wollte ich unbedingt gemeinsam mit anderen musizieren. Darum wählte ich zusätzlich das Saxophon als Instrument und absolvierte innerhalb von 5 Jahren bei Daniel Gaggioli die Hochstufen-Prüfung des Konservatoriums. </p>
                      <p>Nebst dem aktiven Spielen in den Musikgesellschaften Heitenried und Düdingen, faszinierte mich auch die Rolle der Dirigentin. Das führte dazu, dass ich während einem Jahr alle Samstagmorgen für die erste Stufe des Dirigentenkurses investierte. Kurz darauf dirigierte ich auch die Jugendmusik Heitenried. Das Klavierspielen habe ich aber nie aufgegeben und erkannte eigentlich erst nach einer gewissen Distanz meine wahre Passion für dieses Instrument.</p>
                      <p>Gesang und ich - ja das ist so eine Sache. Ich habe ihn noch nicht so lange für mich entdeckt. Zu den Purple Diamonds Anfangszeiten traute ich mich noch überhaupt nicht zu singen und beschränkte mich auf die Begleitung. Tabea hat mich aber immer motiviert und "na dis na" habe ich mich immer mehr stimmlich beteiligt, so dass wir heute den Grossteil unseres Repertoires zweistimmig darbieten können. Die Wintermonate nutze ich nun meistens, um meine Technik zu verfeinern, beispielsweise mit Gesangs-Unterricht bei Annie-May Mettraux.</p>
                      <p>Zurzeit spiele ich mit dem Tenorsax und Piano bei AIRWIN’s Big Band. Besonders freut mich das jüngste Projekte: «P(a)iste it», die neue Cover Band aus dem Sensebezirk. Und natürlich nicht zu vergessen, mein persönliches Lieblingsding und Evergreen: PURPLE DIAMONDS.</p>
                </article>
            </main>
        </div>
    );
}
