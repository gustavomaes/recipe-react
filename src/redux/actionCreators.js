import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    //Recipes
    getRecipesRequest: ['filter'],
    getRecipesSuccess: ['recipes'],
    getRecipesFailure: ['error'],

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