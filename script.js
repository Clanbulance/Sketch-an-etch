let pixels = "16";
let squares = "0"
const gridWidth = document.querySelector(".drawContainer").clientWidth;
const gridHeight = document.querySelector(".drawContainer").clientHeight;
console.log(gridWidth,gridHeight);

const drawContainer = document.querySelector(".drawContainer");
const pixelAmount = document.getElementById("pixelAmount");


pixelAmount.innerText = pixels;






for (x = 0; x < pixels; x++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    drawContainer.appendChild(pixel);
    
    squares++;
    console.log(`${squares} squares created`)
    
}