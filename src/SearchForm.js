export default function SearchForm({ $target, initialState, onChange }) {
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
    this.$li = document.querySelector("input");
    this.$li.focus();
    this.$element.addEventListener("keyup", (e) => {
      const actionIgnoreKeys = [
        "Enter",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft",
      ];
      if (!actionIgnoreKeys.includes(e.key)) {
        onChange(e.target.value);
      }
    });

    this.$element.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  };

  this.render();
}
