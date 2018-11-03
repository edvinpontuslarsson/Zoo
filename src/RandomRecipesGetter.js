'use strict'

const unirest = require('unirest') // requires from node modules
require('dotenv').config() // loads .env into process.env

class RandomRecipesGetter {
    /**
     * Returns promise of array with recipes fetched from web API
     * @param {Number} amount 
     */
    async getRandomFoods(amount) {
        const jsonRecipes = await this.getRandomRecipes(amount)

        const foods = jsonRecipes.map(recipe => recipe.body.recipes[0].title)
        return foods
    }

    getRandomRecipes(amount) {
        const promises = []
        
        return new Promise(async (resolve, reject) => {
            for (let x = 1; x <= amount; x++) {
                const recipePromise = this.getOneRandomRecipe()
                promises.push(recipePromise)
            }

            resolve(
                await Promise.all(promises)
            )
        })
    }

    getOneRandomRecipe() {
        return new Promise((resolve, reject) => {
            unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1')
                .header('X-Mashape-Key', process.env.recipesAPIKey)
                .header('Accept', 'application/json')
                .end((result) => resolve(result))
        })
    }
}

module.exports = RandomRecipesGetter