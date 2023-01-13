let gridSize = 16;
createGrid(gridSize);

function createGrid(gridSize) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let gridArea = gridSize * gridSize;
    for (let i = 1; i <= gridArea; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        grid.insertAdjacentElement("beforeend", pixel);

        pixel.addEventListener("mouseover", function() {
            pixel.style.backgroundColor = "#000000";
        })
    }
}

console.log("hi");