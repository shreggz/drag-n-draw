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
    createCanvas(gridSize);
}

function mediumPixels(gridSize) {
    clearCanvas();
    gridSize = 32;
    createCanvas(gridSize);
}

function largePixels(gridSize) {
    clearCanvas();
    gridSize = 16;
    createCanvas(gridSize);
}

function clearCanvas() {
    const clearPixels = document.getElementsByClassName("pixel");
    for (pixel of clearPixels) {
        pixel.style.backgroundColor = "#ffffff";
    }
}

console.log("hi");