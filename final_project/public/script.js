
function setup() {
    var socket = io();

    var side = 10;
    var matrix = [];

    socket.on("data", drawCreatures)

    function drawCreatures(data) {

        matrix = data.matrix
        weather = data.weather

        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');

        document.getElementById('exanak').innerHTML = weather
        document.getElementById('grass').innerHTML = data.grassMul
        document.getElementById('grassEater').innerHTML = data.grassEaterMul
        document.getElementById('gishatich').innerHTML = data.gishatichMul
        document.getElementById('vorsord').innerHTML = data.vorsordMul
        document.getElementById('aryuc').innerHTML = data.aryucMul
        document.getElementById('bigGrassEater').innerHTML = data.bigGrassEaterMul
        document.getElementById('virus').innerHTML = "Kill - " + data.virusKill



        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    if (weather == "dzmer") {
                        fill("#F8FCF1")
                    }
                    else if (weather == "ashun") {
                        fill("#FD7D2E")
                    }
                    else if (weather == "garun") {
                        fill("#5CE022")
                    }
                    else if (weather == "amar") {
                        fill("green")
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("#961DB3");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("#800000");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 7) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    noStroke();
                    fill("#BB9458");
                    rect(x * side, y * side, side, side);
                    stroke(1);
                }
            }
        }
    }

}

function mousePressed() {
    var socket = io();
    data = {
        x: Math.floor(mouseX/10),
        y: Math.floor(mouseY/10)
    }
    socket.emit("event", data)
    return false;
    
}




















