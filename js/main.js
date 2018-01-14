function makeGrid() {
  let inputHeight = document.getElementById("input_height");
  let inputWidth = document.getElementById("input_width");

  let canvas = document.getElementById("pixel_canvas");

  let height, width;

  function sizePicker() {
    window.onsubmit = saveSize;
  }

  function saveSize() {
    sessionStorage.setItem("height", inputHeight.value);
    sessionStorage.setItem("width", inputWidth.value);
  }

  function retrive() {
    height = sessionStorage.getItem("height");
    width = sessionStorage.getItem("width");

    inputHeight.value = height;
    inputWidth.value = width;

    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");

    let dataArr = [];

    for (let x = 0; x < height; x++) {
      // console.log(tableRow);
      if (tableData.innerHTML == "") {
        for (let y = 0; y < width; y++) {
          tableData.innerHTML = "X";
          dataArr.push(tableData);
        }
        dataArr.forEach(d => {
          d += width;
          console.log(d);
        });
      }
    }
  }
  retrive();

  window.addEventListener("click", sizePicker, false);
}
window.addEventListener("load", makeGrid, false);
