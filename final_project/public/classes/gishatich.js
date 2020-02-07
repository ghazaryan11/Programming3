let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 300;
    }
    //vorpes method
    getNewCoordinates() {
        if (weather !== "dzmer") {
            this.directions = [
                [this.x - 2, this.y - 2],
                [this.x - 1, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 1, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x - 2, this.y - 1],
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x + 2, this.y - 1],
                [this.x - 2, this.y],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x + 2, this.y],
                [this.x - 2, this.y + 1],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1],
                [this.x + 2, this.y + 1],
                [this.x - 2, this.y + 2],
                [this.x - 1, this.y + 2],
                [this.x, this.y + 2],
                [this.x + 1, this.y + 2],
                [this.x + 2, this.y + 2]
            ];
        }
        else {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }
    //qayluma
    move() {

        //yntruma vandak
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;

        }

    }
    moveGrass() {


        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy--;

        }
    }
    eat() {


        let emptyCells = this.chooseCell(2)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 3;

        }
    }
    mul() {
        let mulEnergy
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (weather == "dzmer") {
            mulEnergy = 305
        }
        if (weather == "amar") {
            mulEnergy = 306
        }
        if (weather == "garun" || weather == "ashun") {
            mulEnergy = 303
        }

        if (this.energy >= mulEnergy && newCell) {
            var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 300;
            gishatichMul++
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}