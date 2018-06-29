import axios from 'axios'
import { put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'


export function* getRecipes(action) {
    const recipes = yield axios.get(`http://localhost:3001/recipe`)
    yield put(ActionCreators.getRecipesSuccess(recipes.data))
}

export function* getMyRecipes() {
    const token = localStorage.getItem('token')
    
    const recipes = yield axios.get(`http://localhost:3001/recipe/my`, {
        headers: {
            'x-access-token': token
        }
    })  
    yield put(ActionCreators.getMyRecipesSuccess(recipes.data))
}

export function* getRecipeById(action) {
    const recipes = yield axios.get(`http://localhost:3001/recipe/id/${action.id}`)
    yield put(ActionCreators.getOneRecipeSuccess(recipes.data))
}

export function* createRecipe(action) {
    const token = localStorage.getItem('token')

    try {
        const recipe = yield axios.post(`http://localhost:3001/recipe`, action.data, {
            headers: {
                'x-access-token': token
            }
        })        
        yield put(ActionCreators.createRecipeSuccess(recipe.data))
    } catch (error) {
        yield put(ActionCreators.createRecipeFailure(error.response.data.data.errors))
    }
}

export function* updateRecipe(action) {
    const token = localStorage.getItem('token')

    try {
        const recipe = yield axios.put(`http://localhost:3001/recipe/${action.data.id}`, action.data, {
            headers: {
                'x-access-token': token
            }
        })        
        yield put(ActionCreators.updateRecipeSuccess(recipe.data))
    } catch (error) {
        yield put(ActionCreators.updateRecipeFailure(error.response.data.data.errors))
    }
}

export function* deleteRecipe(action) {
    const token = localStorage.getItem('token')

    try {
        yield axios.delete(`http://localhost:3001/recipe/${action.id}`, {
            headers: {
                'x-access-token': token
            }
        })        
        yield put(ActionCreators.deleteRecipeSuccess(action.id))
    } catch (error) {
        yield put(ActionCreators.deleteRecipeFailure(error.response.data.data.errors))
    }
}