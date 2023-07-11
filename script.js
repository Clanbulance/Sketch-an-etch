
let rows = "16";
let pixels = rows * rows;

let squares = "0"

const drawContainer = document.querySelector(".drawContainer");
const pixelAmount = document.getElementById("pixelAmount");
pixelAmount.innerText = rows;


let pixelSize = 500/(Math.sqrt(pixels))


for (x = 0; x < pixels; x++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width = pixelSize + "px"
    pixel.style.height = pixelSize + "px"
    drawContainer.appendChild(pixel);
 
} 
console.log(`${pixels} squares created`)


const cells = document.querySelectorAll("div.pixel");

cells.forEach(cell => cell.addEventListener('mouseenter', colorCell));

function colorCell(e){
console.log(e)
e.target.style.backgroundColor = "black"
}


//old code
//const gridWidth = document.querySelector(".drawContainer").clientWidth;
//const gridHeight = document.querySelector(".drawContainer").clientHeight;
//console.log(gridWidth,gridHeight);
