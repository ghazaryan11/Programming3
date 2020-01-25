const Grass = require('./classes/grass')
const GrassEater = require('./classes/grassEater')
const Gishatich = require('./classes/gishatich')
const Vorsord = require('./classes/vorsord')
const MardakerAryuc = require('./classes/mardakerAryuc')

let matrix = [];
let rows = 5;
let columns =5;

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

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var grass = new Grass(x, y, 1);
                grassArr.push(grass)
                console.log("Grass=>11")
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grassEater);
                console.log("GrassEater=>22")
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
                console.log("Gishatich=>33")
            }
            else if (matrix[y][x] == 4) {
                var vorsord = new Vorsord(x, y, 4);
                vorsordArr.push(vorsord);
                console.log("Vorsord=>44")
            }
            else if (matrix[y][x] == 5) {
                var mardakerAryuc = new MardakerAryuc(x, y, 5);
                mardakerAryucArr.push(mardakerAryuc);
                console.log("MardakerAryuc=>55")
            }
        }
    }

//draw uxaki nerkuma
setInterval(function(){
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                console.log("Grass=>1")
            }
            else if (matrix[y][x] == 2) {
                console.log("GrassEater=>2")
            }
            else if (matrix[y][x] == 3) {
                console.log("Gishatich=>3")
            }
            else if (matrix[y][x] == 4) {
                console.log("Vorsord=>4")
            }
            else if (matrix[y][x] == 5) {
                console.log("MardakerAryuc=>5")
            }
            else if (matrix[y][x] == 0) {
                console.log("Void=>0")
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
},1000)
