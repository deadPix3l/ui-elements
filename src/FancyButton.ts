import { html, css, LitElement } from 'lit';
import { property, customElement} from 'lit/decorators.js';

/* button based on: https://codepen.io/pirrera/pen/bqVeGx */

@customElement('fancy-button')
class FancyButton extends LitElement {
  static styles = css`
    .btn {
      margin: 0;
      padding: 1em;
      text-align: center;
      //text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: black;
      flex-grow: 1;
      border-radius: 10px;
      --color-a: #84fab0;
      --color-b: #8fd3f4;
      --color-c: var(--color-a);
      background-image: linear-gradient(to right, var(--color-a) 0%, var(--color-b) 51%, var(--color-c) 100%);
    }
    .btn:hover {
      background-position: right center; /* change the direction of the change here */
      transform: scale(1.05, 1.05);
      font-weight: bold;
    }
    .btn:active {
      filter: brightness(50%);
      background-position: center; /* change the direction of the change here */
      transition: 0.2s;
      transform: scale(0.9, 0.9);
    }

    slot { user-select: none;}
  `;
  render() {
    return html`
            <a class="btn" part="button">
            <slot>Example Text</slot>
          </a>
          `;
  }
}
