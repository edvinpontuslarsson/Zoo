'use strict'

const Zoo = require('./src/Zoo')
const RandomRecipesGetter = require('./src/RandomRecipesGetter')
const ZooKeeper = require('./src/ZooKeeper')
const Circus = require('./src/Circus')

startApp()

async function startApp() {
    const zoo = new Zoo()

    const foods = await getFoods(zoo)

    const zooKeeper = new ZooKeeper(foods)
    
    const circus = new Circus(zoo, zooKeeper)
    circus.perform()
}

async function getFoods(zoo) {
    const amount = getFoodAmount(zoo)
    const randomRecipesGetter = new RandomRecipesGetter()
    
    const foods = 
        await randomRecipesGetter.getRandomFoods(amount)

    return foods
}

function getFoodAmount(zoo) {
    let foodAmount = 0

    zoo.Animals.forEach(animal => 
        foodAmount += animal.foodLimit
    )

    return foodAmount
}
