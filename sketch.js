let ROWS = 16;
let COLS = 16;
let container = document.querySelector("#container");

function DrawGrid(rows, cols)
{
    while(container.hasChildNodes())
    {
        container.removeChild(container.firstChild);
    }
    for( i = 0; i < rows; i++)
    {
        let createRow = document.createElement("div");
        createRow.classList = "row";
        createRow.style.height = "100px";
        createRow.style.border = "4px solid brown";
        for( j = 0 ; j< cols; j++)
        {
            let createDiv = document.createElement("div");
            createDiv.classList.add("col");
            createDiv.style.border = "4px solid brown";
            createDiv.addEventListener("mouseover", hoverOver);
            //createDiv.style.width = "100px";
            createDiv.style.flex = "1";
            createRow.appendChild(createDiv);
        }
    
        createRow.style.display = "flex";
        container.appendChild(createRow);
    
    
    }
}


function hoverOver(event){
    event.target.style.backgroundColor = "black";
    console.log("Hover hover");
    //let cols = document.querySelectorAll(".col");
}
function funcPrompt(){
    let gridNumCols = window.prompt("How many cols would you like?", "Limit is 100");
    let gridNumRows = window.prompt("How many rows would you like?", "Limit is 100");
    
    gridNumCols = gridNumCols > 100 ? 100 : gridNumCols;
    gridNumRows = gridNumRows > 100 ? 100 : gridNumRows;
    
    DrawGrid(gridNumRows, gridNumCols);

}

let buttonClick = document.querySelector(".gridSize");
buttonClick.addEventListener("click", funcPrompt);

DrawGrid(ROWS, COLS);

