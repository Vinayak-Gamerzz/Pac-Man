let currMoleTile;
let currPlantTile;
window.onload = function() {
    SetGame();

}

function setGame() {
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click, seclectTile");
        document.getElementById("board").appendChild(tile);

    }
    setInterval(SetMole, 1000); // 1000 mm = 1s, every 1s call setMole
    setInterval(SetPlant, 2000); // 2000 mm = 2s, " " " " " " " " " " 

}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}

function setMole() {
    if (gameOver) {
        return;

    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";

    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;

    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant() {
    if (gameOver) {
        return;

    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";

    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;

    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;

    }
    if(this == currMoleTile) {
        score +=10;
        document.getElementById("score").innerText = score.tosString(); //update score in html

    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;

    }

}