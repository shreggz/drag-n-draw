let gridSize = 16;
let pixelColor = "#000000";

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

console.log("hi");