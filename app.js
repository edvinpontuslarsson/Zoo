'use strict'

const Zoo = require('./src/Zoo')
const ZooKeeper = require('./src/ZooKeeper')
const Circus = require('./src/Circus')

const zoo = new Zoo()
const zooKeeper = new ZooKeeper()
const circus = new Circus(zoo, zooKeeper)

circus.perform()
