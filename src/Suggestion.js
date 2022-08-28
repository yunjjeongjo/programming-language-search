export default function Suggestion({ $target, initialState, onClick }) {
  this.$element = document.createElement("div");
  this.$element.className = "Suggestion";
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { items = [] } = this.state;
    if (items.length > 0) {
      this.$element.style.display = "block";
      this.$element.innerHTML = `        
            <ul>
                ${items
                  .map((item, index) => `<li data-id="${index}">${item}</li>`)
                  .join("")}
            </ul>`;
    } else {
      this.$element.style.display = "none";
      this.$element.innerHTML = "";
    }
    this.$element.querySelectorAll("li").forEach(($li) => {
      $li.addEventListener("click", (e) => {
        alert(e.target.innerText);
        onClick(e.target.innerText);
      });
    });
  };

  this.render();
}
