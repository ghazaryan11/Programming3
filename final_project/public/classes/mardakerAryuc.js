let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class MardakerAryuc extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 1000;
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
    eatVorsord() {


        let emptyCells = this.chooseCell(4)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in vorsordArr) {
                if (newX == vorsordArr[i].x && newY == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 300;
        }
    }
    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (this.energy >= 1020 && newCell) {
            let newMardakerAryuc = new MardakerAryuc(newCell[0], newCell[1], this.index);
            mardakerAryucArr.push(newMardakerAryuc);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 1000;
            aryucMul++
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in mardakerAryucArr) {
                if (this.x == mardakerAryucArr[i].x && this.y == mardakerAryucArr[i].y) {
                    mardakerAryucArr.splice(i, 1);
                    break;
                }
            }

        }
    }

}
