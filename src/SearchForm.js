export default function SearchForm({ $target, onChange }) {
  const $form = document.createElement("form");
  $form.classList.add("SearchInput");
  $target.appendChild($form);

  this.render = () => {
    $form.innerHTML = `
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
    $form.addEventListener("keyup", (e) => {
      const $input = $form.querySelector("input");
      const text = $input.value;

      onChange(text);
    });
  };

  this.render();
}
