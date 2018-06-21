import axios from 'axios'
import { put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'


export function* getRecipes(action) {
    const recipes = yield axios.get(`http://localhost:3001/recipe`)
    yield put(ActionCreators.getRecipesSuccess(recipes.data))
}