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
                    fill("grey");
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






















