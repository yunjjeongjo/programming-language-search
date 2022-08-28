export default function SelectedLanguages({ $target, initialState, onClick }) {
  const $element = document.createElement("div");
  $element.classList.add("SelectedLanguage");
  $target.appendChild($element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      $element.innerHTML = `        
                <ul>
                    ${this.state
                      .map((text, id) => `<li data-id="${id}">${text}</li>`)
                      .join("")}
                </ul>`;
    }
  };

  this.render();
}
