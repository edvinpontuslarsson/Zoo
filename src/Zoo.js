'use strict'

const Animal = require('./Animal')

class Zoo {
    constructor () {
        this.Animals = []
        this.createAnimals()
    }

    createAnimals() {
        const species = ['penguin', 'lion', 'ant', 'spider']        
        let legAmount = 0

        for (let i = 0; i < species.length; i++) {
            legAmount += 2
            const animal = new Animal(species[i], legAmount)            
            this.Animals.push(animal)
        }
    }
}

module.exports = Zoo