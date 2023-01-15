let gridSize = 16;
let pixelColor = "#000000";

const small = document.getElementById("small");
small.addEventListener("click", smallPixels);

const medium = document.getElementById("medium");
medium.addEventListener("click", mediumPixels)

const large = document.getElementById("large");
large.addEventListener("click", largePixels)

const clear = document.getElementById("clear");
clear.addEventListener("click", clearCanvas)

const eraser = document.getElementById("eraser");
eraser.addEventListener("click", erasePixels);

const solid = document.getElementById("solid");
solid.addEventListener("click", solidPixels);

const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", rainbowPixels);

createCanvas(gridSize);

function createCanvas(gridSize) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = pixelColor;
        })
        grid.insertAdjacentElement("beforeend", pixel);
    }
}

function smallPixels() {
    clearCanvas();
    gridSize = 64;
    pixelColor = "#000000"
    createCanvas(gridSize);
}

function mediumPixels(gridSize) {
    clearCanvas();
    gridSize = 32;
    pixelColor = "#000000"
    createCanvas(gridSize);
}

function largePixels(gridSize) {
    clearCanvas();
    gridSize = 16;
    pixelColor = "#000000"
    createCanvas(gridSize);
}

function clearCanvas() {
    const clearPixels = document.getElementsByClassName("pixel");
    for (pixel of clearPixels) {
        pixel.style.backgroundColor = "#ffffff";
    }
}

function erasePixels() {
    pixelColor = "#ffffff";
}

function solidPixels() {
    pixelColor = "#000000";
}

function rainbowPixels() {
    const randomPixels = Array.from(document.getElementsByClassName("pixel"));
    randomPixels.forEach(randomColorGenerator);
}

function randomColorGenerator() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    pixelColor = randomColor;
}

console.log("hi");