let LivingCreature = require('./livingCreature')
let random = require('./random')
module.exports = class Grass extends LivingCreature {
    // bazmanuma azat vandakneri himan vra

    mul() {
        this.multiply += 2;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (weather == "dzmer") {
            this.multiply -= 2
        }
        else if (weather == "amar") {
            this.multiply -= 1
        }
        else if (weather == "ashun" || weather == "garun") {
            this.multiply += 1
        }
        if (this.multiply >= 4 && newCell) {
            let newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}
