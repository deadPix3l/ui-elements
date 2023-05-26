import { html, css, LitElement } from 'lit';
import { property, customElement} from 'lit/decorators.js';

@customElement('fancy-button')
class FancyButton extends LitElement {
  render() {
    return html`
            <h2>Hello!</h2>
            <a class="btn btn-2">Commit changes</a>
          `;
  }
}
