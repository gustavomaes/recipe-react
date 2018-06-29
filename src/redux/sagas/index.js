import { takeLatest, all, put } from 'redux-saga/effects'

import ActionCreators, { Types } from '../actionCreators'
import { getRecipes, getMyRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } from './recipes'
import { login, auth, createUser, destroyAuth } from './auth'
import { updateUser, updateUserById, updatePasswd, getUsers, getUserById, deleteUser } from './user'

import Api from '../../services/Api'

export default function* rootSaga() {

    const devURL = 'http://localhost:3001'
    const prodURL = 'http://localhost:3001'
    const baseURL = process.env.NODE_ENV === 'development' ? devURL : prodURL
    const api = new Api(baseURL)

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

        //User
        takeLatest(Types.UPDATE_USER_REQUEST, updateUser({ api })),
        takeLatest(Types.UPDATE_USER_ID_REQUEST, updateUserById({ api })),
        takeLatest(Types.UPDATE_PASSWD_REQUEST, updatePasswd({ api })),
        takeLatest(Types.GET_USERS_REQUEST, getUsers({ api })),
        takeLatest(Types.GET_USER_ID_REQUEST, getUserById({ api })),
        takeLatest(Types.DELETE_USER_REQUEST, deleteUser({ api })),
        
        //Initial Request
        put(ActionCreators.authRequest())
        
    ])
}

