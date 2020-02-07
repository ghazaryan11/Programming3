const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const fs = require('fs')


var Grass = require('./public/classes/grass')
var GrassEater = require('./public/classes/grassEater')
var Gishatich = require('./public/classes/gishatich')
var Vorsord = require('./public/classes/vorsord')
var MardakerAryuc = require('./public/classes/mardakerAryuc')
var BigGrassEater = require('./public/classes/bigGrassEater')
var Virus = require('./public/classes/virus')

grassArr = [];
grassEaterArr = [];
gishatichArr = [];
vorsordArr = [];
mardakerAryucArr = [];
bigGrassEaterArr = [];
virusArr = [];

grassMul = 0
grassEaterMul = 0
gishatichMul = 0
vorsordMul = 0
aryucMul = 0
bigGrassEaterMul = 0
virusKill = 0

matrix = createMatrix(50, 80);

weather = "garun"

function createMatrix(rows, columns) {
    var matrix = [];
    for (let y = 0; y < rows; y++) {
        matrix[y] = [];
        for (let x = 0; x < columns; x++) {
            let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < 40) {
                matrix[y][x] = 0;
            }
            else if (a >= 40 && a < 90) {
                matrix[y][x] = 1;
            }
            else if (a >= 90 && a < 95) {
                matrix[y][x] = 2;
            }
            else if (a >= 95 && a < 96) {
                matrix[y][x] = 3;
            }
            else if (a >= 96 && a < 97) {
                matrix[y][x] = 4;
            }
            else if (a >= 97 && a < 98) {
                matrix[y][x] = 5;
            }
            else if (a >= 98 && a < 99) {
                matrix[y][x] = 6;
            }
            else if (a >= 99 && a < 100) {
                matrix[y][x] = 7;
            }
        }
    }
    return matrix;
}

function changeWeather() {
    if (weather == "garun") {
        weather = "amar"
    }
    else if (weather == "dzmer") {
        weather = "garun"
    }
    else if (weather == "ashun") {
        weather = "dzmer"
    }
    else if (weather == "amar") {
        weather = "ashun"
    }

    return weather
}

setInterval(changeWeather, 7000)


console.log(weather)

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect('index.html')
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});



function createCharacter() {
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
            else if (matrix[y][x] == 6) {
                var bigGrassEater = new BigGrassEater(x, y, 6);
                bigGrassEaterArr.push(bigGrassEater);
            }
            else if (matrix[y][x] == 7) {
                var newVirus = new Virus(x, y, 7);
                virusArr.push(newVirus);
            }
        }
    }
}
createCharacter()

function characterAction() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
            grassEaterArr[i].move();
            grassEaterArr[i].mul();
            grassEaterArr[i].die();
        }
    }
    if (bigGrassEaterArr[0] !== undefined) {
        for (var i in bigGrassEaterArr) {
            bigGrassEaterArr[i].eat();
            bigGrassEaterArr[i].move();
            bigGrassEaterArr[i].mul();
            bigGrassEaterArr[i].die();
        }
    }
    if (gishatichArr[0] !== undefined) {
        for (var i in gishatichArr) {
            gishatichArr[i].eat();
            gishatichArr[i].move();
            gishatichArr[i].moveGrass();
            gishatichArr[i].mul();
            gishatichArr[i].die();
        }
    }
    if (vorsordArr[0] !== undefined) {
        for (var i in vorsordArr) {
            if (weather == "dzmer") {
                vorsordArr[i].eatAryuc();
                vorsordArr[i].eat();
            }
            vorsordArr[i].move();
            vorsordArr[i].moveGrass()
            vorsordArr[i].mul();
            vorsordArr[i].die();
        }
    }
    if (mardakerAryucArr[0] !== undefined) {
        for (var i in mardakerAryucArr) {
            if (weather == "amar") {
                mardakerAryucArr[i].eatVorsord();
            }
            mardakerAryucArr[i].eatGrassEater();
            mardakerAryucArr[i].move();
            mardakerAryucArr[i].moveGrass();
            mardakerAryucArr[i].mul();
            mardakerAryucArr[i].die();
        }
    }
    if (virusArr[0] !== undefined) {
        for (var i in virusArr) {
            if (weather == "amar") {
                virusArr[i].eatMardakerAryuc();
                virusArr[i].eatGishatich();
            }
            if (weather == "ashun") {
                virusArr[i].eatBigGrassEater();
                virusArr[i].eatGrassEater();
            }
            virusArr[i].move();
            virusArr[i].moveGrass();
            virusArr[i].mul();
            virusArr[i].die();
        }
    }
    data = {
        weather: weather,
        matrix: matrix,
        grassMul: grassMul,
        grassEaterMul: grassEaterMul,
        gishatichMul: gishatichMul,
        vorsordMul: vorsordMul,
        aryucMul: aryucMul,
        bigGrassEaterMul: bigGrassEaterMul,
        virusKill: virusKill
    }
    io.sockets.emit('data', data)
}

setInterval(characterAction, 300)



