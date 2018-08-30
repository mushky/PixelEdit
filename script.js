var tools = ["pencil", "eraser"];
var selected_tool = "pencil";

var selected_color = "black";
var colors = ["black", "red", "blue", "yellow", "white"];
var gridSize;

function generateGrid(){
  const grid = document.getElementById('grid-location');

  var size = prompt("Specify Grid Size, example: 20 for 20x20",20)
  gridSize = size * size;
  console.log(gridSize);
  console.log("size " + size);
  for (var i = 0; i < gridSize; i++){
    let row = document.createElement('div');
    if (i % size == 0){
      row.style.display = "float"
    }else{
      row.style.display = "inline-block";
      row.classList.add('cell');
      row.style.backgroundColor = "#F8F8F8";
      row.addEventListener('mousedown', (e) => changeCellColor(e));
      row.addEventListener('mousedown', (e) => eraseCellColor(e));      
    }
    grid.appendChild(row);            
    document.body.appendChild(grid);
    grid.classList.add('container');
    grid.classList.add('text-center');
    removeGenerateDivButton();    
  }
}

function cellNearMe(){
  
}

function removeGenerateDivButton(){
  const button = document.getElementById("button");
  button.style.display = "none";
}

function changeCellColor(e) {
  if (selected_tool == "pencil") {
    e.target.style.backgroundColor = selected_color;
    console.log("cell color changed");      
  }
}

function eraseCellColor(e) {
  if (selected_tool == 'eraser') {
    e.target.style.backgroundColor = 'white';
    console.log("erased");   
  }
}

function reset(){
  cells = document.querySelectorAll('.cell');
  for (var i = 0 ; i < cells.length; i++){
    cells[i].style.backgroundColor = "#F8F8F8";
  }
}

// Tool Box
function selectPencilTool(){
  var pencilTool = document.getElementById('pencil-tool');
  pencilTool.addEventListener('mousedown', (e) => selected_tool = 'pencil');
  console.log(selected_tool);
  var message = document.getElementById('selected-tool');
  message.innerHTML = "Tool: " + selected_tool;
}

function selectEraserTool(){
  var eraserTool = document.getElementById('eraser-tool');
  eraserTool.addEventListener('mousedown', (e) => selected_tool = 'eraser');
  console.log(selected_tool);
  var message = document.getElementById('selected-tool');
  message.innerHTML = "Tool: " + selected_tool;
}

// Color Select
function selectBlackColor(){
  var blackColor = document.getElementById('black-color');
  blackColor.addEventListener('mousedown', (e) => selected_color = 'black');
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;
}

function selectRedColor(){
  var redColor = document.getElementById('red-color');
  redColor.addEventListener('mousedown', (e) => selected_color = 'red');
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;
}

function selectBlueColor(){
  var blueColor = document.getElementById('blue-color');
  blueColor.addEventListener('mousedown', (e) => selected_color = 'blue');
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;  
}

function selectYellowColor(){
  var yellowColor = document.getElementById('yellow-color');
  yellowColor.addEventListener('mousedown', (e) => selected_color = 'yellow');
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;
}

function selectWhiteColor(){
  var whiteColor = document.getElementById('white-color');
  whiteColor.addEventListener('mousedown', (e) => selected_color = "#F8F8F8");
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;
}



