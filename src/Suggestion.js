export default function Suggestion({ $target, initialState, onClick }) {
  const $element = document.createElement("div");
  $element.classList.add("Suggestion");
  $target.appendChild($element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (Array.isArray(this.state)) {
      if (this.state.length > 0) {
        $element.style.display = "block";
        $element.innerHTML = `        
            <ul>
                ${this.state
                  .map((text, id) => `<li data-id="${id}">${text}</li>`)
                  .join("")}
            </ul>`;
      } else {
        $element.style.display = "none";
      }
    }
    $element.querySelectorAll("li").forEach(($li) => {
      $li.addEventListener("click", (e) => {
        alert(e.target.innerText);
        onClick(e.target.innerText);
      });
    });
  };

  this.render();
}
