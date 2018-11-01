'use strict'

const Zoo = require('./Zoo')
const ZooKeeper = require('./ZooKeeper')

/**
 * This class might be a bit confusing
 */
class Circus {
    constructor() {
        this.zoo = new Zoo()
        this.zooKeeper = new ZooKeeper()
        let firstAnimal = this.zoo.Animals[0]
        this.zooKeeper.feedAnimal(firstAnimal)
    }
}

module.exports = Circus