'use strict'

class ZooKeeper {
    constructor (foods) {
        this.foods = foods
    }

    feedAnimal(animal) {
        const food = this.foods.pop()
        animal.putFoodInMouth(food)
    }
}

module.exports = ZooKeeper