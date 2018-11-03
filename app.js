'use strict'

const Zoo = require('./src/Zoo')
const RandomRecipesGetter = require('./src/RandomRecipesGetter')
const ZooKeeper = require('./src/ZooKeeper')
const Circus = require('./src/Circus')

startApp()

// async to be able to use the await keyword
async function startApp() {
    const zoo = new Zoo()
    
    // await because recipes come from web API
    const recipes = await getRecipes(zoo)
    console.log(recipes)

    // const zooKeeper = new ZooKeeper(recipes)

    /*
    const circus = new Circus(zoo, zooKeeper)
    circus.perform()
    */
}

async function getRecipes(zoo) {
    const amount = getRecipesAmount(zoo)
    const randomRecipesGetter = new RandomRecipesGetter()
    
    const recipes = 
        await randomRecipesGetter.getRandomRecipes(amount)

    return recipes
}

function getRecipesAmount(zoo) {
    let rightRecipesAmount = 0

    zoo.Animals.forEach(animal => 
        rightRecipesAmount += animal.foodLimit
    )

    return rightRecipesAmount
}
