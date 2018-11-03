'use strict'

class Animal {
    constructor (species, legs) {
        this.species = species
        this.legs = legs
        
        this.mouth = []
        this.foodLimit = 3
    }

    putFoodInMouth(food) {
        this.mouth.push(food)
    }

    isStillHungry() {
        return this.mouth.length < this.foodLimit
    }
}

module.exports = Animal