'use strict'

const unirest = require('unirest')
require('dotenv').config()

class RandomRecipesGetter {
    /**
     * Returns promise of array with foods fetched from web API
     * @param {Number} amount 
     */
    async getRandomFoods(amount) {
        const jsonRecipes = await this.getOneRandomRecipeArray(amount)

        const foods = jsonRecipes.map(recipe => recipe.title)
        return foods
    }

    /*
    getRandomRecipeArrays(amount) {
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
    }*/

    getOneRandomRecipeArray(amount) { // used in url
        return new Promise((resolve, reject) => {
            unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=${amount}`)
                .header('X-Mashape-Key', process.env.recipesAPIKey)
                .header('Accept', 'application/json')
                .end((result) => resolve(result.body.recipes))
        })
    }
}

module.exports = RandomRecipesGetter