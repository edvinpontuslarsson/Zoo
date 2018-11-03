'use strict'

class Animal {
    constructor (species, legs) {
        this.species = species
        this.legs = legs
        
        this.mouth = []
    }

    putFoodInMouth(food) {
        this.mouth.push(food)
    }

    isStillHungry() {
        return this.mouth.length < 3
    }
}

module.exports = Animal