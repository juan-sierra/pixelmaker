let inputHeight = document.getElementById("input_height");
let inputWidth = document.getElementById("input_width");
let cp = document.getElementById("colorPicker");

let height, width, color;

let canvas = document.getElementById("pixel_canvas");

function makeGrid() {
  function sizePicker() {
    window.onsubmit = saveSettings;
  }

  function saveSettings() {
    sessionStorage.setItem("height", inputHeight.value);
    sessionStorage.setItem("width", inputWidth.value);
  }

  cp.addEventListener(
    "input",
    function() {
      color = cp.value;
      console.log(color);
    },
    false
  );

  function retrive() {
    height = sessionStorage.getItem("height");
    width = sessionStorage.getItem("width");

    inputHeight.value = height;
    inputWidth.value = width;

    for (let x = 0; x < height; x++) {
      let tRow = document.createElement("tr");
      canvas.appendChild(tRow);
      for (let y = 0; y < width; y++) {
        let tData = document.createElement("td");

        tRow.appendChild(tData);
        tData.addEventListener("click", el => {
          tData.style = `background-color: ${color}`;
          console.log(tData);
        });
      }
    }
  }
  retrive();

  window.addEventListener("click", sizePicker, false);
}

window.addEventListener("load", makeGrid, false);
