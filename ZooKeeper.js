'use strict'

class ZooKeeper {
    constructor () {
        this.foods = [
            
            // for the penguin
            'plastic bag',
            'fish',
            'donut',

            // for the lion
            'bacon',
            'zookeeper',
            'penguin',

            // for the ant
            'apple',
            'banana',
            'pizza',

            // for the spider
            'fly',
            'ant',
            'lion'
        ]
    }

    feedAnimal(animal) {
        const food = this.foods.shift()
        animal.putFoodInMouth(food)
    }
}

module.exports = ZooKeeper