let inputHeight = document.getElementById("input_height");
let inputWidth = document.getElementById("input_width");
let colorPicker = document.getElementById("colorPicker");

let canvas = document.getElementById("pixel_canvas");

function makeGrid() {
  function sizePicker() {
    window.onsubmit = saveSettings;
  }

  function saveSettings() {
    sessionStorage.setItem("height", inputHeight.value);
    sessionStorage.setItem("width", inputWidth.value);
  }

  function colorProp() {
    window.onchange = saveColor;
  }

  function saveColor() {
    sessionStorage.setItem("color", colorPicker.value);
    window.location.reload(true);
  }

  window.addEventListener("input", colorProp, false);

  function retrive() {
    let height, width, color;

    height = sessionStorage.getItem("height");
    width = sessionStorage.getItem("width");
    color = sessionStorage.getItem("color");

    inputHeight.value = height;
    inputWidth.value = width;
    colorPicker.value = color;

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
