const container = document.querySelector("#container");
const resetGrid = document.querySelector("#resetGrid");
const body = document.querySelector("#body");

// Current default gridSize to be loaded with
let defaultGridSize = 16;  

// Determines the size of each box in the sketchContainer
let boxDimension = 600 / defaultGridSize;  

// Builds that grid that will be used to be drawn in
function buildGrid(gridSize) {

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

    return boxes;
}

// Add event listener to the reset button to call the buildGrid function again
resetGrid.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.cssText += "background-color: white;";
    }

    sketchContainer.style.css += "border: solid black 5px;";
})

buildGrid(16);
const boxes = drawBoxes();
