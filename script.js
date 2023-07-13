
//Trying to grab the value of the slider
const sliderValue = document.querySelector("#pixelAmount"); //adjust DOM to right amount
const input = document.querySelector("#slider");    //select slider
sliderValue.textContent=input.value; //set dom to pixelamount
input.addEventListener("input", (e) => { //eventlistner on slider 
  sliderValue.textContent = e.target.value; //adjust value on display again
  console.log(sliderValue.textContent);
    rows = sliderValue.textContent; //set rows to value from slider
    pixels = rows * rows; 
    pixelSize = 500/(Math.sqrt(pixels))
  GenerateCells(pixels) //run cellfunction with update value
});



let rows = sliderValue.textContent;
let pixels = rows * rows;

let squares = "0"

const drawContainer = document.querySelector(".drawContainer");

let pixelSize = 500/(Math.sqrt(pixels))

//generates the divs at the start, after this the function gets used to create the
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
    cells.forEach(cell => cell.addEventListener('mouseenter', colorCell)); // this is now in the GenerateCells function, so it stays alive

}} 
console.log(`${pixels} squares created`)

// this is now in the GenerateCells function, so it stays alive
// This is now just the color function
function colorCell(e){
console.log(e)
e.target.style.backgroundColor = "black";
}

//eventlistener on red button
const redButton = document.getElementById("colorButtonRed");
redButton.addEventListener('click', changeToRed);

//function to remove old eventlistner and add the new one
function changeToRed(){
    const cells = document.querySelectorAll("div.pixel")
    cells.forEach(cell => cell.removeEventListener('mouseenter', colorCell));
    cells.forEach(cell => cell.addEventListener('mouseenter',colorCellRed));
};


//change the color to red
function colorCellRed(e){
    console.log(e);
    e.target.style.backgroundColor = "red";
}


//eventlistener on RainbowButton
const rainBowButton = document.getElementById("colorRainbowButton");
rainBowButton.addEventListener('click', changeToRainbow);

//function to remove old eventlistners and add the new one
function changeToRainbow(){
    const cells = document.querySelectorAll("div.pixel")
    cells.forEach(cell => cell.removeEventListener('mouseenter', colorCell));
    cells.forEach(cell => cell.removeEventListener('mouseenter', colorCellRed));
    cells.forEach(cell => cell.addEventListener('mouseenter', colorCellRainbow));
};

//generate random color
const rainbowCollors = ['red','blue','yellow','green'];

function getRandomColor(){
    return rainbowCollors[Math.floor(Math.random()*rainbowCollors.length)];
}


//change the color to red
function colorCellRainbow(e){
    console.log(e);
    e.target.style.backgroundColor = getRandomColor(rainbowCollors);
};









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
