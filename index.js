const container = document.querySelector("#container");
const resetGrid = document.querySelector("#resetGrid");
const changeGrid = document.querySelector("#changeGridSize");
const body = document.querySelector("#body");

// Current default gridSize to be loaded with
let gridDimension = 16;
// Determines the size of each box in the sketchContainer
let boxDimension = 600 / gridDimension;  

// Builds that grid that will be used to be drawn in
function buildGrid(gridSize) {
    let boxDimension = 600 / gridSize;  

    // Create the div the will contain the divs for the Etch-a-Sketch
    let sketchContainer = document.createElement("div");
    sketchContainer.setAttribute("id", "sketchContainer");

    for (let i = 0; i < gridSize; i++) {

        // Create a div here to represent a row, and below append 16 divs
        let row = document.createElement("div");
    
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px;`
            row.appendChild(box);
        }
    
        sketchContainer.appendChild(row);
        container.appendChild(sketchContainer);
    }

    drawBoxes()
}

// Adds event listeners to all boxes to be hovered over and colored black
function drawBoxes() {
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", (e) => {
            e.target.style.cssText += "background-color: black;";
        })
    }
}

// Event listener to reset the grid
resetGrid.addEventListener("click", () => {
    let sketchContainer = document.querySelector("#sketchContainer");
    container.removeChild(sketchContainer);
    buildGrid(gridDimension);
})

changeGrid.addEventListener("click", () => {
    gridDimension = prompt("Enter a number for the dimensions of the Etch-a-Sketch:");
    let sketchContainer = document.querySelector("#sketchContainer");
    container.removeChild(sketchContainer);
    buildGrid(gridDimension);
})

// Build the initial grid displayed on the website
buildGrid(gridDimension);
