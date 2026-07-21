let board;
const rowcount = 21;
const columcount = 19;
const tilesize = 32;
const boardswidth = columcount*tilesize;
const boardhHeight = rowcount*tilesize;
let context;

let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardhHeight;
    board.width = boardswidth;
    context = board.getContext("2d");
}

function loadImages () {
    wallImage = new Image ();
    wallImage.src = "./wall.png"

    blueGhostImage = new Image();
    blueGhostImage.src = "./blueGhost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./orangeGhost.png"
    pinkGhostImage = new Image()
    pinkGhostImage.src = "./pinkGhost.png";
    redGhostImage = new Image()
    redGhostImage.src = "./redGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./pacmanUp.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "./pacmanDown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./pacmanLeft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "./pacmanRight.png";

}