'use strict'

class ZooKeeper {
    constructor () {
        this.foods = [
            'tomato',
            'fish',
            'donut',
            'bacon',
            'peach',
            'carrot',
            'apple',
            'banana',
            'pizza',
            'fly',
            'cake',
            'potato'
        ]
    }

    feedAnimal(animal) {
        const food = this.foods.shift()
        animal.putFoodInMouth(food)
    }
}

module.exports = ZooKeeper