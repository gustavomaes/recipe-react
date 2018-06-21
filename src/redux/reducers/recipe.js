import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    data: [],
    isLoading: false,
    error: false,
    errorMessage: ''
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



export const HANDLERS = {
    [Types.GET_RECIPES_REQUEST]: getRecipesRequest,
    [Types.GET_RECIPES_SUCCESS]: getRecipesSuccess,
    [Types.GET_RECIPES_FAILURE]: getRecipesFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)