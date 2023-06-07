import { LitElement, html, css, svg } from 'lit';
import { property, customElement} from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';


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

  .div-btn {
    padding: 0.5em;
    margin: 0 0 0 0.25em;
    border: none;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    border-radius: 4px;
    transition: background 0.4s ease-in-out; /* add transition to opacity property */
    transition: filter 0.4s ease-in-out; /* add transition to opacity property */
    transition: transform 0.4s ease-in-out; /* add transition to opacity property */
    width: 2.5em;
    height: 2.5em;
    background-color: #2f3c5b;
  }


  .div-btn:not(:disabled):hover {
      background-color: var(--button-color);
      transform: scale(1.1);
      /* filter: brightness(1); */
  }

  .div-btn.active, .div-btn:not(:disabled):active {
      background-color: var(--button-color);
      filter: brightness(70%);
  }

  .div-btn:disabled {
      filter: brightness(70%) !important;
  }

  .div-btn svg {
      pointer-events: none;
      height: 20;
      width: 20;
  }

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


interface Button {
  color: string;
  svg: string;
  active: boolean;
  stateful?: boolean;
  ignoredisabled?: boolean;
  function?: (parent: ContentNode) => any;
}

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

   toggleLocked(parent: ContentNode): void {
    parent.locked = !parent.locked;
  }


   buttons: Button[];

  constructor() {
    super();
    this.buttons = [
      { color: '#4b90eb', svg: `
<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"></path><path d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"></path></g></svg>
      `, active: false, stateful: false},
      { color: '#cda065', svg: `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height=20 width=20 version="1.1" id="Capa_1" viewBox="0 0 611.999 611.999" xml:space="preserve">
<g>
	<path d="M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952   c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029   c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851   c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386   c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073   c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826   C153.666,566.767,185.212,594.814,216.02,611.195z" fill="currentColor"/>
</g>
</svg>
      `, active: false, stateful: true},
      { color: '#808df5', svg: `
              <svg xmlns="http://www.w3.org/2000/svg" height=20 width=20 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
          `, active: false, stateful: true, function: this.toggleLocked, ignoredisabled: true},
        { color: '#dd0000', svg: `
<svg fill="currentColor" viewBox="0 0 32 32" height=20 width=20 xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>            `, active: false, stateful: true},
      // More buttons here
    ];
  }

  handleButtonClick(button: Button): void {
    if (button.stateful) {
        button.active = !button.active;
    }

    if (button.function) {
        button.function(this);
    }

    this.requestUpdate();
  }


  render() {
    return html`
      <div class="details-container">
        <div class="detail-wrap-text detail ${this.locked ? 'locked' : ''}">
          <div class="details-btns" >

          ${this.buttons.map(button =>
        html`
          <button
            class="div-btn ${button.active ? "active" : ""}"
            ?disabled=${this.locked && button.stateful && !button.ignoredisabled}
            style="--button-color: ${button.color};" 
            @click="${() => this.handleButtonClick(button)}"
          >${unsafeHTML(button.svg)}
          </button>
        `
      )}

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

