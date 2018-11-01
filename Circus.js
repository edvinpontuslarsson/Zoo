'use strict'

const Zoo = require('./Zoo')
const ZooKeeper = require('./ZooKeeper')

class Circus {
    constructor() {
        this.zoo = new Zoo()
        this.zooKeeper = new ZooKeeper()
        let firstAnimal = this.zoo.Animals[0]
        this.zooKeeper.feedAnimal(firstAnimal)
    }
}

module.exports = Circus