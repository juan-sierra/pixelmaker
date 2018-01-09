// 1. define variables
// 2. add event listeners
// 3. set the size of the cross stitch canvas

let height = document.getElementById("input_height");
let width = document.getElementById("input_width");

function sizePicker() {
  window.onsubmit = sizePicker;
}

function saveSize() {
  localStorage.setItem("height", height.value);
  localStorage.setItem("width", width.value);

  console.log(localStorage.getItem(height));
}

function retriveData() {
  height.value = localStorage.getItem("height");
  width.value = localStorage.getItem("width");
  console.log(height.value, width.value);
}

retriveData();

window.addEventListener("click", sizePicker, false);
