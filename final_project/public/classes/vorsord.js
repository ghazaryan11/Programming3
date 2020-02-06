let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class Vorsord extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 500;
    }
    //vorpes method
    getNewCoordinates() {
        if (weather == "dzmer") {
            this.directions = [
                [this.x - 3, this.y - 3],
                [this.x - 2, this.y - 3],
                [this.x - 1, this.y - 3],
                [this.x, this.y - 3],
                [this.x + 1, this.y - 3],
                [this.x + 2, this.y - 3],
                [this.x + 3, this.y - 3],
                [this.x - 3, this.y - 2],
                [this.x - 2, this.y - 2],
                [this.x - 1, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 1, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x + 3, this.y - 2],
                [this.x - 3, this.y - 1],
                [this.x - 2, this.y - 1],
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x + 2, this.y - 1],
                [this.x + 3, this.y - 1],
                [this.x - 3, this.y],
                [this.x - 2, this.y],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x + 2, this.y],
                [this.x + 3, this.y],
                [this.x - 3, this.y + 1],
                [this.x - 2, this.y + 1],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1],
                [this.x + 2, this.y + 1],
                [this.x + 3, this.y + 1],
                [this.x - 3, this.y + 2],
                [this.x - 2, this.y + 2],
                [this.x - 1, this.y + 2],
                [this.x, this.y + 2],
                [this.x + 1, this.y + 2],
                [this.x + 2, this.y + 2],
                [this.x + 3, this.y + 2],
                [this.x - 3, this.y + 3],
                [this.x - 2, this.y + 3],
                [this.x - 1, this.y + 3],
                [this.x, this.y + 3],
                [this.x + 1, this.y + 3],
                [this.x + 2, this.y + 3],
                [this.x + 3, this.y + 3]
            ];
        }
        else {
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
    eat() {


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
    eatAryuc() {


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
            this.energy += 505;
        }
    }
    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (this.energy >= 505 && newCell) {
            let newVorsord = new Vorsord(newCell[0], newCell[1], this.index);
            vorsordArr.push(newVorsord);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 500;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in vorsordArr) {
                if (this.x == vorsordArr[i].x && this.y == vorsordArr[i].y) {
                    vorsordArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}