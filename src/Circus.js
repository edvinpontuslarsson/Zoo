'use strict'

class Circus {
    constructor(zoo, zooKeeper) {
        this.zoo = zoo
        this.zooKeeper = zooKeeper
    }

    perform() {
        for (let i = 0; i < this.zoo.Animals.length; i++) {
            const currentAnimal = this.zoo.Animals[i]

            while (currentAnimal.isStillHungry()) {
                this.zooKeeper.feedAnimal(currentAnimal)
            }

            this.displayResult(currentAnimal)
        }
    }

    displayResult(animal) {
        const mouthContent = animal.mouth.join(' and ')

        console.log(
            `${animal.species} has ${animal.legs} legs, eats ${mouthContent}`
        )
    }
}

module.exports = Circus