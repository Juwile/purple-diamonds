import React, { useState } from 'react';
import './default.css';

const FIELDS_INITIAL = { vorname: '', nachname: '', email: '', anfrage: '' };

export default function Kontakt() {
  const [fields, setFields] = useState(FIELDS_INITIAL);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitForm(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFields(FIELDS_INITIAL);
        setStatus('success');
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <main>
        <article className="rectangle">
          <h1>Kontakt</h1>

          <form id="kontakt" onSubmit={submitForm}>
            <label htmlFor="vorname">Vorname</label>
            <input
              type="text"
              id="vorname"
              name="vorname"
              value={fields.vorname}
              onChange={handleChange}
              required
            />

            <label htmlFor="nachname">Nachname</label>
            <input
              type="text"
              id="nachname"
              name="nachname"
              value={fields.nachname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="anfrage">Anfrage</label>
            <textarea
              id="anfrage"
              name="anfrage"
              value={fields.anfrage}
              onChange={handleChange}
              required
            />

            <button className="button" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Wird gesendet…' : 'Absenden'}
            </button>
          </form>

          {status === 'success' && (
            <div className="confirmation-box">
              <h2>Besten Dank für Ihre Anfrage.</h2>
              <p>Wir melden uns schnellstmöglich.</p>
              <p>Liebe Grüsse</p>
              <p>Purple Diamonds</p>
            </div>
          )}

          {status === 'error' && (
            <div className="error-box">
              <h2>Leider ist etwas schiefgelaufen.</h2>
              <p>
                Bitte versuche es erneut oder schreib uns direkt an{' '}
                <a href="mailto:purple.d.music@gmail.com">purple.d.music@gmail.com</a>.
              </p>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
