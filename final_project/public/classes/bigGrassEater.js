let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class BigGrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 1100;
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
    eat() {


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
            this.energy += 2;

        }
    }
    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (this.energy >= 1250 && newCell) {
            var newBigGrassEater = new BigGrassEater(newCell[0], newCell[1], this.index);
            bigGrassEaterArr.push(newBigGrassEater);
            matrix[newCell[1]][newCell[0]] = 6;
            this.energy = 1100;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in bigGrassEaterArr) {
                if (this.x == bigGrassEaterArr[i].x && this.y == bigGrassEaterArr[i].y) {
                    bigGrassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}
