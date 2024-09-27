import React from 'react';
import './default.css';
import wish from './audio/wish-you-were-here.mp3';
import aMomentLikeThis from './audio/a-moment-like-this.mp3';
import schwur from './audio/schwur.mp3';
import perfect from './audio/perfect.mp3';
import youRaiseMeUp from './audio/you-raise-me-up.mp3';
import iHaveAVoice from './audio/i-have-a-voice.mp3';
import dasBeste from './audio/das-beste.mp3';
import aThousandYears from './audio/A thousand years.mp3';
import alwaysRemember from './audio/Always remember us this way.mp3';
import drHimmu from './audio/Dr himmu brönnt.mp3';
import ehrenwort from './audio/Ehrenwort.mp3';
import onlyOne from './audio/Im not the only one.mp3';
import listenHeart from './audio/Listen to your heart.mp3';
import scharlach from './audio/Scharlachrot.mp3';
import theWinner from './audio/The winner takes it all.mp3';
import stillTheOne from './audio/Youre still the one.mp3';


export default function Repertoire() {
    return(
        <div>
            <main>
                <article className="rectangle">
                    <h1>Repertoire</h1>
                    <h2>Gesang und Piano</h2>
                    <div class="columns">
                      <div className="flex-box">
                        <p>A thousand years - Christina Perri</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={aThousandYears}/>
                        </audio>
                      </div>
                      <div className="flex-box">
                        <p>A Beautiful Noise - Alicia Keys & Brandi Carlile</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={iHaveAVoice}/>
                        </audio>
                      </div>
                      <p>All of me – John Legend</p>
                      <div className="flex-box">
                        <p>A moment like this – Leona Lewis</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={aMomentLikeThis}/>
                        </audio>
                      </div>
                      <p>Always remember us this way - Bradley Cooper & Lady Gaga</p>
                      <audio controls class="audioPlayerRepertoire">
                          <source src={alwaysRemember}/>
                        </audio>
                      <p>Applaus, Applaus - Sportfreunde Stiller</p>
                      <p>An Tagen wie diesen – Die Toten Hosen</p>
                      <p>Auf uns - Andreas Bourani</p>
                      <p>Bali - Florian Ast</p>
                      <p>Bridge over troubled water - Simon and Garfunkel</p>
                      <div className="flex-box">
                        <p>Das Beste - Silbermond</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={dasBeste}/>
                        </audio>
                      </div>
                      <p>Circle of Life - Elton John</p>
                      <div className="flex-box">
                        <p>Dr Himu brönnt - Gölä</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={drHimmu}/>
                        </audio>
                      </div>
                      <div className="flex-box">
                        <p>Ehrenwort - Fäaschtbänkler</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={ehrenwort}/>
                        </audio>
                      </div>
                      <p>Ein Teil von meinem Herzen - Jonathan Zelter</p>
                      <p>Footprints in the sand - Leona Lewis</p>
                      <p>Für immer uf di - Patent Ochsner</p>
                      <p>Halleluja - Leonard Cohan</p>
                      <p>Heaven - Gotthard</p>
                      <p>Heaven - Bryan Adams</p>
                      <p>Heiterefahne - Trauffer</p>
                      <p>Hemmigslos Liebe - Fabienne Louves, Marc Sway</p>
                      <p>Hit the road Jack – Ray Charles</p>
                      <p>High Hopes - Kodaline</p>
                      <p>Ich schwöru - Sina & Büne Huber</p>
                      <div className="flex-box">
                        <p>I'm not the only one - Sam Smith</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={onlyOne}/>
                        </audio>
                      </div>
                      <p>I see fire – Ed Sheeran</p>
                      <p>I was made for loving you - Ed Sheeran & Tori Kelly</p>
                      <p>Ich kenne nichts - Xavier Naidoo</p>
                      <p>Indianer - Gölä</p>
                      <p>Ja - Silbermond</p>
                      <p>Jar of hearts – Christina Perri</p>
                      <p>Knockin’ on heaven’s door – Guns N’ Roses</p>
                      <p>Let it be - Beatles</p>
                      <p>Letschte Atemzug - Trauffer</p>
                      <div className="flex-box">
                        <p>Listen to your heart - Roxette</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={listenHeart}/>
                        </audio>
                      </div>
                      <p>Die Liebe zur Natur – Lennon & Maisy</p>
                      <p>Million Reasons - Lady Gaga</p>
                      <p>No matter where you are - Us The Duo</p>
                      <p>Nothing Else Matters – Metallica</p>
                      <p>One - U2</p>
                      <div className="flex-box">
                        <p>Perfect - Ed Sheeran</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={perfect}/>
                        </audio>
                      </div>
                      <p>Reckoning Song – Asaf Avidan</p>
                      <p>Say something – Christina Aguilera feat. A Great Big World</p>
                      <div className="flex-box">
                        <p>Scharlachrot  – Patent Ochsner</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={scharlach}/>
                        </audio>
                      </div>
                      <div className="flex-box">
                        <p>Schwur - Sandee</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={schwur}/>
                        </audio>
                      </div>
                      <p>Shallow - Bradley Cooper & Lady Gaga</p>
                      <p>Skyfall – Adele</p>
                      <p>Someone like you - Adele</p>
                      <p>Stand by me – Ben E. King</p>
                      <p>The Rose – Bette Midler</p>
                      <p>The story – Brandie Carlile</p>
                      <div className="flex-box">
                        <p>The winner takes it all – ABBA</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={theWinner}/>
                        </audio>
                      </div>
                      <p>This is the life – Amy Macdonald</p>
                      <p>Turpentine – Brandie Carlile</p>
                      <p>Wake me up – Avicii</p>
                      <div className="flex-box">
                        <p>Wish you were here - Pink Floyd</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={wish}/>
                        </audio>
                      </div>
                      <p>W. Nuss vo Bümpliz - Patent Ochsner</p>
                      <div className="flex-box">
                        <p>You raise me up - Josh Groban</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={youRaiseMeUp}/>
                        </audio>
                      </div>
                      <div className="flex-box">
                        <p>You're still the one - Shania Twain</p>
                        <audio controls class="audioPlayerRepertoire">
                          <source src={stillTheOne}/>
                        </audio>
                      </div>
                      <p>You'll be in my heart - Phil Collins</p>
                    </div>
                    <h2>Piano</h2>
                    <div class="columns">
                      <p>Brokeback Mountain Theme</p>
                      <p>Canon in D – Johann Pachelbel</p>
                      <p>Comptine d'un autre été: L'après-midi (Amélie Poulin)</p>
                      <p>Forest Gump Theme</p>
                      <p>La valse d'Amélie (Amélie Poulin)</p>
                      <p>Nocturne Es-Dur – Frédéric Chopin</p>
                      <p>Pour Elise – Ludwig van Beethoven</p>
                      <p>River flows in you (Twilight)</p>
                      <p>Titanic Theme</p>
                      <p>Eigenkompositionen</p>
                    </div>
                    <br></br>
                    <p>Haben Sie einen besonderen Lied-Wunsch? Gerne stellen wir ein individuelles Programm für Ihren Anlass zusammen und studieren die Songs speziell für Sie ein.</p>
                </article>
            </main>
        </div>
    );
}
