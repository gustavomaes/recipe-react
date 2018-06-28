import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    data: [],
    recipe: {},
    isLoading: false,
    saved: false,
    updated: false,
    isSaving: false,
    error: false,
    errorsMessage: []
}

export const getRecipesRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}

export const getRecipesSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.recipes
    }
}

export const getRecipesFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const getOneRecipeRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}

export const getOneRecipeSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        recipe: action.recipe
    }
}

export const getOneRecipeFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const createRecipeRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false        
    }
}

export const createRecipeSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        data: action.recipe
    }
}

export const createRecipeFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,        
        error: true,
        errorsMessage: action.errors
    }
}

export const createRecipeReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        data: [],
        isLoading: false,
        isSaving: false,
        error: false,
        errorsMessage: []
    }
}

export const fullRecipeReset = (state = INITIAL_STATE, action) => {
    console.log(action)
    return {
        ...state,
        data: [],
        isLoading: false,
        isSaving: false,
        saved: false,
        updated: false,
        error: false,
        errorsMessage: []
    }
}

export const updateRecipeRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        updated: false        
    }
}

export const updateRecipeSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        updated: true,
        data: action.recipe
    }
}

export const updateRecipeFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        updated: false,
        error: true,
        errorsMessage: action.errors
    }
}


export const HANDLERS = {
    [Types.GET_RECIPES_REQUEST]: getRecipesRequest,
    [Types.GET_RECIPES_SUCCESS]: getRecipesSuccess,
    [Types.GET_RECIPES_FAILURE]: getRecipesFailure,

    [Types.GET_ONE_RECIPE_REQUEST]: getOneRecipeRequest,
    [Types.GET_ONE_RECIPE_SUCCESS]: getOneRecipeSuccess,
    [Types.GET_ONE_RECIPE_FAILURE]: getOneRecipeFailure,

    [Types.CREATE_RECIPE_REQUEST]: createRecipeRequest,
    [Types.CREATE_RECIPE_SUCCESS]: createRecipeSuccess,
    [Types.CREATE_RECIPE_FAILURE]: createRecipeFailure,
    [Types.CREATE_RECIPE_RESET]: createRecipeReset,

    [Types.UPDATE_RECIPE_REQUEST]: updateRecipeRequest,
    [Types.UPDATE_RECIPE_SUCCESS]: updateRecipeSuccess,
    [Types.UPDATE_RECIPE_FAILURE]: updateRecipeFailure,

    [Types.FULL_RECIPE_RESET]: fullRecipeReset    
    
}

export default createReducer(INITIAL_STATE, HANDLERS)