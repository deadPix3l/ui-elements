import { LitElement, html, css, svg } from 'lit';
import { property, customElement} from 'lit/decorators.js';

const widgetCss = css`
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #333b4a;
    border: 7px solid #1c2029;
    border-radius: 10px;
    min-height: 25%;()
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border: 5px solid #1c2029;
  }

  .detail {
    margin: 10px;
    max-height: 20em;
    overflow-y: auto;
  }

  .details-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242935;
    margin-top: 5px;
    border-radius: 2px;
  }

  .details-btns {
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0px;
    margin: 0em 1.5em;
  }

  .div-btn, .lock-btn, .close-btn {
    padding: 0.75em;
    margin: 0 0 0 0.25em;
    background: #2E3946;
    border: none;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    border-radius: 4px;
    transition: background 0.4s ease-in-out; /* add transition to opacity property */
    width: 2.5em;
  }

  .close-btn:hover { background: #9e0c17; }
  .close-btn:disabled { filter: brightness(60%);}
  .close-btn:disabled:hover{ background: #2E3946;}

  .lock-btn:hover { background: #707de5; }
  .locked .lock-btn { background: #404090; }
  .div-btn svg { pointer-events: none; }

  .details-wrap-text {
    white-space: pre-wrap;
  }
 
  .details-title {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #818fa9;
    display: block;
    position: absolute;
  }

  .details-content {
    font-weight: 400;
    font-family: monospace;
    color: inherit;
    background-color: inherit;
    font-size: 15px;
    color: #ffffff;
    width: 99%;
    //max-width: 99%;
    //min-width: 99%;
    border: 0;
    margin: 0;
    margin-top: 2.5em;
    overflow-wrap: anywhere;
    width: 80%;
    //overflow: hidden;
    white-space: pre;
    resize: none; // disable resizing
    display: inline-block;
    word-break: break-all;
  }

  .details-content:focus {
    outline: none !important;
  }
  button {
    margin: 1em 0;
    padding: 0.5em;
    color: white;
    border: 0;
    font-weight: bold;
  }

  button:hover {
    background-position: right center;
    //background-position: 0 100px;
    color: white;
  }

  .flexbox { 
    display: flexbox;
    flex-flow: row nowrap;
  }
`;

@customElement('content-node')
class ContentNode extends LitElement {
  static styles = widgetCss;

  @property({type : String})
  tool = 'Unnamed Tool';

  @property({type : String})
  content = 'Content Goes here';

  @property({type : Boolean})
  locked = false;

  getContent() {
    return this.content; // Fetch the current content
  }

   toggleLocked() {
    this.locked = !this.locked;
  }


  render() {
    return html`
      <div class="details-container">
        <div class="detail-wrap-text detail ${this.locked ? 'locked' : ''}">
          <div class="details-btns" >
            <button class="div-btn lock-btn" @click=${this.toggleLocked}>
              <svg xmlns="http://www.w3.org/2000/svg" height=15 width=15 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </button>
            <button class="div-btn close-btn" ?disabled="${this.locked}" @click="${this.remove}">X</button>

          </div>
          <span class="details-title">${this.tool}</span>
          <p
              class="details-content"
              ?contenteditable="${!this.locked}"
              role="textbox"
          >${this.content}</p>
        </div>
      </div>
    `;
}
}

