import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'


export const getRecipes = ({ api }) => function* () {

    try {
        const recipes = yield call(api.getRecipes, ``)
        yield put(ActionCreators.getRecipesSuccess(recipes.data))
    } catch (error) { }

}

export const getMyRecipes = ({ api }) => function* () {
    try {
        const recipes = yield call(api.getRecipes, `/my`)
        yield put(ActionCreators.getMyRecipesSuccess(recipes.data))
    } catch (error) { }
}

export const getRecipeById = ({ api }) => function* (action) {
    const recipes = yield call(api.getRecipes, `/id/${action.id}`)    
    yield put(ActionCreators.getOneRecipeSuccess(recipes.data))
}

export const createRecipe = ({ api }) => function* (action) {
    try {
        const recipe = yield call(api.createRecipe, action.data)        
        yield put(ActionCreators.createRecipeSuccess(recipe.data))
    } catch (error) {
        yield put(ActionCreators.createRecipeFailure(error.response.data.data.errors))
    }
}

export const updateRecipe = ({ api }) => function* (action) {
    try {
        const recipe = yield call(api.updateRecipe, action.data.id, action.data)                
        yield put(ActionCreators.updateRecipeSuccess(recipe.data))
    } catch (error) {
        yield put(ActionCreators.updateRecipeFailure(error.response.data.data.errors))
    }
}

export const deleteRecipe = ({ api }) => function* (action) {
    try {
        yield call(api.deleteRecipe, action.id)                        
        yield put(ActionCreators.deleteRecipeSuccess(action.id))
    } catch (error) {
        yield put(ActionCreators.deleteRecipeFailure(error.response.data.data.errors))
    }
}