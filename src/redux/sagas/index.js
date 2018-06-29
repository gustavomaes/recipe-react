import { takeLatest, all, put } from 'redux-saga/effects'

import ActionCreators, { Types } from '../actionCreators'
import { getRecipes, getMyRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from './recipes'
import { login, auth, createUser, destroyAuth } from './auth'

export default function* rootSafa() {
    yield all([
        //Recipes
        takeLatest(Types.GET_RECIPES_REQUEST, getRecipes),
        takeLatest(Types.GET_MY_RECIPES_REQUEST, getMyRecipes),
        takeLatest(Types.GET_ONE_RECIPE_REQUEST, getRecipeById),
        takeLatest(Types.CREATE_RECIPE_REQUEST, createRecipe),
        takeLatest(Types.UPDATE_RECIPE_REQUEST, updateRecipe),
        takeLatest(Types.DELETE_RECIPE_REQUEST, deleteRecipe),

        //Auth
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.LOGIN_REQUEST, login),
        takeLatest(Types.CREATE_USER_REQUEST, createUser),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

        //Initial Request
        put(ActionCreators.authRequest())
        
    ])
}

