let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class Virus extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 2000;
    }
    //vorpes method
    getNewCoordinates() {
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

            for (let i in grassArr) {
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
    eatGrassEater() {


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
            this.energy += 2;

        }
    }
    eatGishatich() {

        let emptyCells = this.chooseCell(3)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }
    eatMardakerAryuc() {


        let emptyCells = this.chooseCell(5)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in mardakerAryucArr) {
                if (newX == mardakerAryucArr[i].x && newY == mardakerAryucArr[i].y) {
                    mardakerAryucArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }
    eatBigGrassEater() {


        let emptyCells = this.chooseCell(6)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in bigGrassEaterArr) {
                if (newX == bigGrassEaterArr[i].x && newY == bigGrassEaterArr[i].y) {
                    bigGrassEaterArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }
    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (this.energy >= 2050 && newCell) {
            let newVirus = new Virus(newCell[0], newCell[1], this.index);
            virusArr.push(newVirus);
            matrix[newCell[1]][newCell[0]] = 7;
            this.energy = 2000;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in virusArr) {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }
            }

        }
    }

}
