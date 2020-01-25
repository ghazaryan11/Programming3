let matrix = [];
let rows = 50;
let columns = 120;

for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 0) {
            matrix[y][x] = 0;
        }
        if (a >= 0 && a < 90) {
            matrix[y][x] = 1;
        }
        else if (a >= 90 && a < 95) {
            matrix[y][x] = 2;
        }
        else if (a >= 95 && a < 97) {
            matrix[y][x] = 3;
        }
        else if (a >= 97 && a < 99) {
            matrix[y][x] = 4;
        }
        else if (a >= 99 && a < 100) {
        matrix[y][x] = 5; 
        }
    }
}



// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var vorsordArr = [];
var mardakerAryucArr = [];
var side = 10;

function setup() {
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    //pttvum em matrix mejov u stexcum object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y, 1);
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);

            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var vorsord = new Vorsord(x, y, 4);
                vorsordArr.push(vorsord);
            }
            else if (matrix[y][x] == 5) {
                var mardakerAryuc = new MardakerAryuc(x, y, 5);
                mardakerAryucArr.push(mardakerAryuc);
            }
        }
    }

}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
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
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                noStroke();
                fill("#acacac");
                rect(x * side, y * side, side, side);
                stroke(1);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
        gishatichArr[i].move();
        gishatichArr[i].moveGrass();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].eat();
        vorsordArr[i].move();
        vorsordArr[i].moveGrass()
        vorsordArr[i].mul();
        vorsordArr[i].die();
    }
    for (var i in mardakerAryucArr) {
        mardakerAryucArr[i].eatVorsord();
        mardakerAryucArr[i].eatGrassEater();
        mardakerAryucArr[i].move();
        mardakerAryucArr[i].moveGrass();
        mardakerAryucArr[i].mul();
        mardakerAryucArr[i].die();
    }
}