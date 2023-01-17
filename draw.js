let gridSize = 16;
let pixelColor = "#000000";
gridSizeIndicator(gridSize);
pixelColorIndicator(pixelColor);

const colorButtons = document.querySelectorAll('.color-choice');
colorButtons.forEach(colorButton => colorButton.addEventListener("click", changePixelColor));

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
        grid.insertAdjacentElement("beforeend", pixel);
    }
    let gridPixels = document.querySelectorAll(".pixel");
        gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorPixels));
}

function colorPixels() {
    switch (pixelColor) {
        case "rainbow":
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case "eraser":
            this.style.backgroundColor = "#ffffff";
            break;
        default:
            this.style.backgroundColor = "#000000";
            break;
    }
}

function changePixelColor(event) {
    switch (event.target.dataset.color) {
        case "rainbow":
            pixelColor = "rainbow";
            pixelColorIndicator(pixelColor);
            break;
        case "eraser":
            pixelColor = "eraser";
            pixelColorIndicator(pixelColor);
            break;
        default:
            pixelColor = "#000000";
            pixelColorIndicator(pixelColor);
            break;
    }
}

function smallPixels() {
    clearCanvas();
    gridSize = 64;
    createCanvas(gridSize);
    gridSizeIndicator(gridSize);
}

function mediumPixels(gridSize) {
    clearCanvas();
    gridSize = 32;
    createCanvas(gridSize);
    gridSizeIndicator(gridSize);
}

function largePixels(gridSize) {
    clearCanvas();
    gridSize = 16;
    createCanvas(gridSize);
    gridSizeIndicator(gridSize);
}

function clearCanvas() {
    const clearPixels = document.getElementsByClassName("pixel");
    for (pixel of clearPixels) {
        pixel.style.backgroundColor = "#ffffff";
    }
}

function gridSizeIndicator(gridSize) {
    let largeButtonLight = document.getElementById("large");
    let mediumButtonLight = document.getElementById("medium");
    let smallButtonLight = document.getElementById("small");

    if (gridSize === 16) {
        largeButtonLight.style.backgroundColor = "#2195b5";
        mediumButtonLight.style.backgroundColor = "#003153";
        smallButtonLight.style.backgroundColor = "#003153";
    }
    else if (gridSize === 32) {
        mediumButtonLight.style.backgroundColor = "#2195b5";
        smallButtonLight.style.backgroundColor = "#003153";
        largeButtonLight.style.backgroundColor = "#003153";
    }
    else if (gridSize === 64) {
        smallButtonLight.style.backgroundColor = "#2195b5";
        mediumButtonLight.style.backgroundColor = "#003153";
        largeButtonLight.style.backgroundColor = "#003153";
    }
}

function pixelColorIndicator(pixelColor) {
    let blackButtonLight = document.getElementById("black");
    let rainbowButtonLight = document.getElementById("rainbow");
    let eraserButtonLight = document.getElementById("eraser");

    if (pixelColor == "#000000") {
        blackButtonLight.style.backgroundColor = "#2195b5";
        rainbowButtonLight.style.backgroundColor = "#003153";
        eraserButtonLight.style.backgroundColor = "#003153";
    }

    else if (pixelColor == "rainbow") {
        rainbowButtonLight.style.backgroundColor = "#2195b5";
        blackButtonLight.style.backgroundColor = "#003153";
        eraserButtonLight.style.backgroundColor = "#003153";
    }

    else if (pixelColor == "eraser") {
        eraserButtonLight.style.backgroundColor = "#2195b5";
        blackButtonLight.style.backgroundColor = "#003153";
        rainbowButtonLight.style.backgroundColor = "#003153";
    }
}

console.log("hi");