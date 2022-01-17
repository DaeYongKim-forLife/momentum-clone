const rangeForm = document.querySelector(".range-form");

function handleToRange(value) {
  value.preventDefault()
  console.log(value);
}

rangeForm.addEventListener("submit", handleToRange);