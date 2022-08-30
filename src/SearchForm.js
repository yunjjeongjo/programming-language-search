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
    let timer;
    this.$element.addEventListener("keyup", (e) => {
      const actionIgnoreKeys = [
        "Enter",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft",
      ];
      if (!actionIgnoreKeys.includes(e.key)) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          timer = null;
          onChange(e.target.value);
        }, 200);
      }
    });

    this.$element.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  };

  this.render();
}
