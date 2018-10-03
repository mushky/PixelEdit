var tools = ["pencil", "eraser"];
var colors = ["black", "red", "blue", "yellow", "white", "purple"];
var selected_tool = "pencil"
var selected_color = "black";

var gridSize;
var cellSize;

function generateGrid(){
  const grid = document.getElementById('grid-location');
  
  size = prompt("Specify Grid Size, example: 20 for 20x20\n\nMaximum Value is 40",20);

  gridSize = size * size;
  console.log(gridSize);
  console.log("size " + size);

  // Smaller the grid size, bigger the cells. Larger the grid size, smaller the cells
  cellSize = 50-size
  if (cellSize <= 20){
    cellSize = 15
  }
  
  console.log(cellSize)
  for (var i = 0; i < gridSize; i++){
    let row = document.createElement('div');
    if (i % size == 0){
      row.style.display = "float"
    }else{    
      row.style.display = "inline-block";
      row.classList.add('cell');
      row.style.width = cellSize
      row.style.height = cellSize  
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

// Rectangle 
function getOrderedRectangleCoordinates(x0, y0, x1, y1) {
  return {
    x0 : Math.min(x0, x1),
    y0 : Math.min(y0, y1),
    x1 : Math.max(x0, x1),
    y1 : Math.max(y0, y1)
  };
},

function getRectanglePixels(x0, y0, x1, y1) {
  var rectangle = getOrderedRectangleCoordinates(x0, y0, x1, y1);
  var pixels = [];

  for (var x = rectangle.x0 ; x <= rectangle.x1 ; x++) {
    for (var y = rectangle.y0 ; y <= rectangle.y1 ; y++) {
      pixels.push({'col': x, 'row': y});
    }
  }
  return pixels;
},
// Rectangle End

function cellNearMe(){
  // Finds Cells next to selected cell
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


function selectPurpleColor(){
  var whiteColor = document.getElementById('purple-color');
  whiteColor.addEventListener('mousedown', (e) => selected_color = "purple");
  console.log(selected_color);
  var message = document.getElementById('selected-color');
  message.innerHTML = "Color: " + selected_color;
}



