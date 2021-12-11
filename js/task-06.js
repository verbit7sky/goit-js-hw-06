const inputValue = document.querySelector("#validation-input"); // input

const validValue = inputValue.getAttribute("data-length"); // 6

inputValue.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === Number(inputValue.dataset.length)) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    inputValue.classList.add("invalid");
    inputValue.classList.remove("valid");
  }
}
