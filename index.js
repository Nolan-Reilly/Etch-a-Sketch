let sketchContainer = document.querySelector("#sketchContainer");
const resetGrid = document.querySelector("#resetGrid");
const body = document.querySelector("#body");

let defaultGridSize = 50;

let boxDimension = 600 / defaultGridSize;

// Build some sort of creation tool that creates some grid of divs here
// Example is 16x16 grid, 25x25 grid, 40x40 grid

// Left off trying to implement creating the grid from a function instead of being hardcoded in
// had problems with the right, and bottom border disappearing when resetting. Code
// below might fix this if we instead don't change each box to the color white, but instead
// delete the entire grid, and replace it with a whole new grid
function buildGrid(gridSize) {
    

    for (let i = 0; i < defaultGridSize; i++) {

        // Create a div here to represent a row, and below append 16 divs
        const row = document.createElement("div");
    
        for (let j = 0; j < defaultGridSize; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px;`
            row.appendChild(box);
        }
    
        sketchContainer.appendChild(row);
    }
}

for (let i = 0; i < defaultGridSize; i++) {

    // Create a div here to represent a row, and below append 16 divs
    const row = document.createElement("div");

    for (let j = 0; j < defaultGridSize; j++) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.cssText = `width: ${boxDimension}px; height: ${boxDimension}px;`
        row.appendChild(box);
    }

    sketchContainer.appendChild(row);
}

const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", (e) => {
        e.target.style.cssText += "background-color: black;";
    })
}

// Work on this with the new above function
resetGrid.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.cssText += "background-color: white;";
    }

    sketchContainer.style.css += "border: solid black 5px;";
})

