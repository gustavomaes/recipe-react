import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isAuth: false,
    isLoggingIn: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const loginRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: true,
        error: false,
        errorMessage: ''
    }
}

export const loginSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: false,
        isAuth: true,
        user: action.user        
    }
}

export const loginFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: false,
        error: true,
        errorMessage: action.error
    }
}

export const authRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: true,
        error: false,
        errorMessage: ''
    }
}

export const authSuccess = (state = INITIAL_STATE, action) => {    
    return {
        ...state,
        isLoggingIn: false,
        isAuth: true,
        user: action.user
    }
}

export const authFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: false,
        isAuth: false
    }
}

export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
    return {
        isLoggingIn: false,
        isAuth: false,
        user: {},
        error: false,
        errorMessage: ''
    }
}

export const HANDLERS = {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,
    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess
}

export default createReducer(INITIAL_STATE, HANDLERS)