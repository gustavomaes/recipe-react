import { takeLatest, all, put } from 'redux-saga/effects'

import ActionCreators, { Types } from '../actionCreators'
import { getRecipes } from './recipes'
import { login, auth, destroyAuth } from './auth'

export default function* rootSafa() {
    yield all([
        //Recipes
        takeLatest(Types.GET_RECIPES_REQUEST, getRecipes),

        //Auth
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.LOGIN_REQUEST, login),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

        //Initial Request
        put(ActionCreators.authRequest())
        
    ])
}

