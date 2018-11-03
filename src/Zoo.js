'use strict'

const Animal = require('./Animal')

class Zoo {
    constructor () {
        this.Animals = []
        this.createAnimals()
    }

    createAnimals() {
        const species = ['penguin', 'lion', 'ant', 'spider']        
        let legsAmount = 0

        for (let i = 0; i < species.length; i++) {
            legsAmount += 2
            const animal = new Animal(species[i], legsAmount)            
            this.Animals.push(animal)
        }
    }
}

module.exports = Zoo