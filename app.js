'use strict'

// instead of npm start, run:
// node app

const Zoo = require('./Zoo')
const ZooKeeper = require('./ZooKeeper')
const Circus = require('./Circus')

const zoo = new Zoo()
const zooKeeper = new ZooKeeper()
const circus = new Circus(zoo, zooKeeper)

circus.perform()
