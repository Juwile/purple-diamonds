import React, {Component} from 'react';
import './default.css';

class googleForm extends Component {

  constructor(props) {
        super(props);

        this.state = { // initial state
            vorname:'',
            nachname:'',
            anfrage:'',
            email:''

        }
        console.log(this.state)
        this.submitForm = this.submitForm.bind(this);
    }

  submitForm(e) {
    e.preventDefault();

    var querystring = require('querystring') // to turn json into x-www-form-urlencoded format

    var payload = querystring.stringify(this.state);

    var finish1 = payload.replace("vorname", "entry.2005620554");
    var finish2 = finish1.replace("nachname", "entry.1676888878");
    var finish3 = finish2.replace("email", "emailAddress" );
    var finish4 = finish3.replace("anfrage", "entry.839337160");

    console.log(finish4);

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: finish4
    };
    fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfcvlskqOm0I0OUCy-u00grZ61T9Zm8LYpr8hpZPgPcQsJ7vg/formResponse', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

  render() {
      return(
          <div>
          <main>
              <article className="rectangle">
              <form id="kontakt" onSubmit={this.submitForm}>
                  <label for="Vorname">Vorname</label>
                  <input type="text" id="Vorname" name="Vorname" onChange={ (e) => this.setState({ vorname:e.target.value})}/>
                  <label for="Nachname">Nachname</label>
                  <input type="text" id="Nachname" name="Nachname" onChange={ (e) => this.setState({ nachname:e.target.value})}/>
                  <label for="Email">Email</label>
                  <input type="text" id="email" name="email" onChange={ (e) => this.setState({ email:e.target.value})}/>
                  <label>Anfrage</label>
                  <textarea type="text" id="Anfrage" name="Anfrage" onChange={ (e) => this.setState({ anfrage:e.target.value})}/>
                  <button class="button">Absenden</button>
                </form>
              </article>
          </main>
          </div>
      );
  }
}



export default (googleForm);

//<iframe class="hide-on-small" src="https://docs.google.com/forms/d/e/1FAIpQLSfcvlskqOm0I0OUCy-u00grZ61T9Zm8LYpr8hpZPgPcQsJ7vg/viewform?embedded=true" width="640" height="808" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
//<iframe class="hide-on-large"src="https://docs.google.com/forms/d/e/1FAIpQLSfcvlskqOm0I0OUCy-u00grZ61T9Zm8LYpr8hpZPgPcQsJ7vg/viewform?embedded=true" width="280" height="1200" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
