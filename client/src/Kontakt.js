import React, { Component } from 'react';
import './default.css';

class GoogleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vorname: '',
      nachname: '',
      email: '',
      anfrage: '',
      showBox: false,
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    // Google Forms Feld-IDs (aus Prefill-Link)
    const formData = new URLSearchParams();
    formData.append('entry.1284592876', this.state.vorname);   // Vorname
    formData.append('entry.1474834856', this.state.nachname); // Nachname
    formData.append('entry.1088136659', this.state.email);    // Email
    formData.append('entry.1229545334', this.state.anfrage);  // Anfrage

    fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSc8W4aN8M-GkLSI5eDmIIPzoWRw_n-KAUhIJ9dck_E7SoLmUg/formResponse',
      {
        method: 'POST',
        mode: 'no-cors', // wichtig für Google Forms
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    );

    // Formular leeren + Bestätigung anzeigen
    this.setState({
      vorname: '',
      nachname: '',
      email: '',
      anfrage: '',
      showBox: true,
    });

    // Bestätigung nach 8 Sekunden ausblenden
    setTimeout(() => {
      this.setState({ showBox: false });
    }, 8000);
  }

  render() {
    return (
      <div>
        <main>
          <article className="rectangle">
            <h1>Kontakt</h1>

            <form id="kontakt" onSubmit={this.submitForm}>
              <label htmlFor="Vorname">Vorname</label>
              <input
                type="text"
                id="Vorname"
                value={this.state.vorname}
                onChange={(e) =>
                  this.setState({ vorname: e.target.value })
                }
                required
              />

              <label htmlFor="Nachname">Nachname</label>
              <input
                type="text"
                id="Nachname"
                value={this.state.nachname}
                onChange={(e) =>
                  this.setState({ nachname: e.target.value })
                }
                required
              />

              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                value={this.state.email}
                onChange={(e) =>
                  this.setState({ email: e.target.value })
                }
                required
              />

              <label htmlFor="Anfrage">Anfrage</label>
              <textarea
                id="Anfrage"
                value={this.state.anfrage}
                onChange={(e) =>
                  this.setState({ anfrage: e.target.value })
                }
                required
              />

              <button className="button" type="submit">
                Absenden
              </button>
            </form>

            {this.state.showBox && (
              <div className="confirmation-box">
                <h2>Besten Dank für Ihre Anfrage.</h2>
                <p>Wir melden uns schnellstmöglich.</p>
                <p>Liebe Grüsse</p>
                <p>Purple Diamonds</p>
              </div>
            )}
          </article>
        </main>
      </div>
    );
  }
}

export default GoogleForm;
