import React from 'react';
import './default.css';
import dasBeste from './videos/das-beste.mp4';
import schwur from './videos/schwur.mp4';
import perfect from './videos/perfect.mp4';
import aMoment from './videos/a-moment-like-this.mp4';
import letschtAtemzug from './videos/letscht-atemzug.mp4';
import heiterefahne from './videos/heiterefahne.mp4';
import noise from './videos/i-have-a-voice.mp4';



export default function Aufnahmen() {
    return(
        <div>
            <main>
                <article className="rectangle">
                <h1>Aufnahmen</h1>
                  <div class="flex-container">
                    <div>
                      <h2>A beautiful noise - A. Keys & B. Carlile</h2>
                      <video width="350"  height="200" controls >
                      <source src={noise} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>Schwur - Sandee</h2>
                      <video width="350"  height="200" controls >
                      <source src={schwur} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>Perfect – Ed Sheeran</h2>
                      <video width="350"  height="200" controls >
                      <source src={perfect} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>Das Beste – Silbermond</h2>
                      <video width="350"  height="200" controls >
                      <source src={dasBeste} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>A moment like this – Leona Lewis</h2>
                      <video width="350"  height="200" controls >
                      <source src={aMoment} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>Letschte Atemzug – Trauffer</h2>
                      <video width="350"  height="200" controls >
                      <source src={letschtAtemzug} type="video/mp4"></source>
                      </video>
                    </div>
                    <div>
                      <h2>Heiterefahne – Trauffer</h2>
                      <video width="350"  height="200" controls >
                      <source src={heiterefahne} type="video/mp4"></source>
                      </video>
                    </div>
                  </div>
                </article>
            </main>
        </div>
    );
}
