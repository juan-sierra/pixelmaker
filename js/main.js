let inputHeight = $("#input_height");
let inputWidth = $("#input_width");
let colorPicker = $("#colorPicker");

let canvas = $("#pixel_canvas");

let sizePicker = $("#sizePicker");

let height, width, color;

$(sizePicker).submit(function() {
  makeGrid(inputHeight, inputWidth);
});

function makeGrid(h, w) {
  h = h.val();
  w = w.val();
  // save to browser session storage
  // data will be delete upon closing window
  // will remain in storage if page is reloaded
  sessionStorage.setItem("height", h);
  sessionStorage.setItem("width", w);
}

$(colorPicker).change(function() {
  sessionStorage.setItem("color", colorPicker.val());
});

function retrive() {
  height = sessionStorage.getItem("height");
  width = sessionStorage.getItem("width");

  color = sessionStorage.getItem("color");

  for (let x = 0; x < height; x++) {
    let tRow = $("<tr></tr>");
    canvas.append(tRow);
    for (let y = 0; y < width; y++) {
      let tData = $("<td></td>");
      tRow.append(
        tData.click(function() {
          $(tData).css("background-color", color);
        })
      );
    }
  }
}
retrive();
