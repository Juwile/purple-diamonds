const express = require('express');
const cors = require('cors');
const https = require('https');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSc8W4aN8M-GkLSI5eDmIIPzoWRw_n-KAUhIJ9dck_E7SoLmUg/formResponse';

app.post('/api/kontakt', (req, res) => {
  const { vorname, nachname, email, anfrage } = req.body;

  if (!vorname || !nachname || !email || !anfrage) {
    return res.status(400).json({ error: 'Alle Felder sind erforderlich.' });
  }

  const formData = new URLSearchParams();
  formData.append('entry.1284592876', vorname);
  formData.append('entry.1474834856', nachname);
  formData.append('entry.1088136659', email);
  formData.append('entry.1229545334', anfrage);

  const body = formData.toString();
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  };

  const request = https.request(GOOGLE_FORM_ACTION, options, (response) => {
    // Google Forms returns 302 on successful submission
    if (response.statusCode === 302 || response.statusCode === 200) {
      res.json({ success: true });
    } else {
      res.status(500).json({ error: 'Formular konnte nicht gesendet werden.' });
    }
  });

  request.on('error', () => {
    res.status(500).json({ error: 'Netzwerkfehler beim Senden.' });
  });

  request.write(body);
  request.end();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
