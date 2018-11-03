'use strict'

const unirest = require('unirest') // requires from node modules
require('dotenv').config() // loads .env into process.env

class RandomRecipesGetter {
    /**
     * Returns promise of array with recipes fetched from web API
     * @param {Number} amount 
     */
    async getRandomRecipes(amount) {
        return new Promise((resolve, reject) => {
            unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=any')
                .header('X-Mashape-Key', process.env.recipesAPIKey)
                .header('Accept', 'application/json')
                .end((result) => resolve(result))
        })
    }

    async getOneRandomRecipe() {
        
    }
}

module.exports = RandomRecipesGetter