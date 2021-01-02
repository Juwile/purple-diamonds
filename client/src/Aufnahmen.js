import React from 'react';
import './default.css';


export default function Aufnahmen() {
    return(
        <div>
            <main>
                <article className="rectangle">
                <h1>Aufnahmen</h1>
                  <div class="flex-container">
                    <div>
                      <h2>Schwur – Sandee</h2>
                      <div>
                      <iframe class="hochformat" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurple.d.music%2Fvideos%2F2259385090794849%2F" width="480" height="168" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      </div>
                    </div>
                    <div>
                      <h2>Letschte Atemzug – Trauffer</h2>
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurple.d.music%2Fvideos%2F2009199149325390%2F" width="240" height="360" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                    <div>
                      <h2>Perfect – Ed Sheeran</h2>
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurple.d.music%2Fvideos%2F654872731641620%2F" max-width="480" height="168" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>
                    </div>
                    <div>
                      <h2>Halleluja – Leonard Cohen</h2>
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpurple.d.music%2Fvideos%2F1611163915654490%2F" max-width="480" height="168" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>
                    </div>

                    <div>
                      <h2>Heiterefahne – Trauffer</h2>
                      <iframe max-width="480" height="168" src="https://www.youtube.com/embed/YkEoxxhtQi0" frameborder="0" allowfullscreen="true"></iframe>
                    </div>
                  </div>
                </article>
            </main>
        </div>
    );
}
