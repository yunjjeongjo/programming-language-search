const MAX_COUNT = 5;
export default function SelectedLanguages({ $target, initialState, onClick }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      this.$element.innerHTML = `        
                <ul>
                    ${this.state
                      .map(
                        (item, index) => `<li data-id="${index}">${item}</li>`
                      )
                      .join("")}
                </ul>`;
    }
  };

  this.render();
}
