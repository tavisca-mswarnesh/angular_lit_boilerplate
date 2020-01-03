import { html, customElement, property, LitElement } from "lit-element";
@customElement("my-input")
export default class OrxeInput extends LitElement {
  @property({ type: String })
  input_type = "text";
  render() {
    return html`
      <input type=${this.input_type} />
    `;
  }
}
