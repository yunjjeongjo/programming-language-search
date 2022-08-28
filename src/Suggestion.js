export default function Suggestion({
  $target,
  initialState,
  onSelect,
  onClick,
}) {
  this.$element = document.createElement("div");
  this.$element.className = "Suggestion";
  $target.appendChild(this.$element);

  this.state = { items: initialState.items, selectedIndex: 0 };

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex } = this.state;
    if (items.length > 0) {
      this.$element.style.display = "block";
      this.$element.innerHTML = `        
            <ul>
                ${items
                  .map(
                    (item, index) =>
                      `<li class="${
                        index === selectedIndex
                          ? "Suggestion__item--selected"
                          : ""
                      }" data-id="${index}">${item}</li>`
                  )
                  .join("")}
            </ul>`;
    } else {
      this.$element.style.display = "none";
      this.$element.innerHTML = "";
    }

    window.addEventListener("keyup", (e) => {
      if (items.length > 0) {
        const lastIndex = items.length - 1;
        const navigationKeys = ["ArrowUp", "ArrowDown"];
        let nextIndex = selectedIndex;

        if (navigationKeys.includes(e.key)) {
          if (e.key === "ArrowUp") {
            nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
          } else if (e.key === "ArrowDown") {
            nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
          }
        }

        this.setState({ ...this.state, selectedIndex: nextIndex });
      }
    });

    this.$element.querySelectorAll("li").forEach(($li) => {
      $li.addEventListener("click", (e) => {
        alert(e.target.innerText);
        onClick(e.target.innerText);
      });
    });
  };

  this.render();
}
