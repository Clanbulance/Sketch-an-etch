
//Trying to grab the value of the slider
const sliderValue = document.querySelector("#pixelAmount");
const input = document.querySelector("#slider");
sliderValue.textContent=input.value;
input.addEventListener("input", (e) => {
  sliderValue.textContent = e.target.value;
  console.log(sliderValue.textContent);
    rows = sliderValue.textContent;
    pixels = rows * rows;
    pixelSize = 500/(Math.sqrt(pixels))
  GenerateCells(pixels)
});



let rows = sliderValue.textContent;
let pixels = rows * rows;

let squares = "0"

const drawContainer = document.querySelector(".drawContainer");

let pixelSize = 500/(Math.sqrt(pixels))

//generates the divs at the start
GenerateCells(pixels)
function GenerateCells(pixelvalue){
drawContainer.innerHTML= "";
for (x = 0; x < pixelvalue; x++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = pixelSize + "px"
    pixel.style.height = pixelSize + "px"
    drawContainer.appendChild(pixel);
    const cells = document.querySelectorAll("div.pixel");                   //add listener to cells un function so it does not get removed
    cells.forEach(cell => cell.addEventListener('mouseenter', colorCell));

}} 



console.log(`${pixels} squares created`)

// This part makes a nodelist for all the cells and // this is now in the GenerateCells function, so it stays alive
// This is now just the color function

function colorCell(e){
console.log(e)
e.target.style.backgroundColor = "black"
}

//Here we make a button to clear all the cells
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener('click',clearCells);

function clearCells(){
    const cells = document.querySelectorAll("div.pixel");  // added this so it stays alive                 
    cells.forEach(cell => cell.style.backgroundColor = "white")
};







//old code
//const gridWidth = document.querySelector(".drawContainer").clientWidth;
//const gridHeight = document.querySelector(".drawContainer").clientHeight;
//console.log(gridWidth,gridHeight);
