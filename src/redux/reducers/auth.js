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

export const createUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoggingIn: true,
        error: false,
        errorMessage: ''
    }
}

export const createUserSuccess = (state = INITIAL_STATE, action) => {
    console.log(action)
    return {
        ...state,
        isLoggingIn: false,
        isAuth: true,
        user: action.user        
    }
}

export const createUserFailure = (state = INITIAL_STATE, action) => {
    console.log(action)
    return {
        ...state,
        isLoggingIn: false,
        error: true,
        errorMessage: action.errors
    }
}

export const HANDLERS = {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,

    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,

    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,

    [Types.CREATE_USER_REQUEST]: createUserRequest,
    [Types.CREATE_USER_SUCCESS]: createUserSuccess,
    [Types.CREATE_USER_FAILURE]: createUserFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)