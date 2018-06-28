import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    //Recipes
    getRecipesRequest: null,
    getRecipesSuccess: ['recipes'],
    getRecipesFailure: ['error'],

    getOneRecipeRequest: ['id'],
    getOneRecipeSuccess: ['recipe'],
    getOneRecipeFailure: ['error'],

    createRecipeRequest: ['data'],
    createRecipeSuccess: ['recipe'],
    createRecipeFailure: ['errors'],
    createRecipeReset: null,

    updateRecipeRequest: ['data'],
    updateRecipeSuccess: ['recipe'],
    updateRecipeFailure: ['errors'],

    fullRecipeReset: null,
    

    //Auth
    loginRequest: ['email', 'passwd'],
    loginSuccess: ['user'],
    loginFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null
})

export default Creators