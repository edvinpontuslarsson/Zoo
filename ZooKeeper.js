'use strict'

class ZooKeeper {
    constructor () {
        // nothing here yet
    }

    feedAnimal(animal) {
        animal.putFoodInMouth('apple')
    }
}

module.exports = ZooKeeper