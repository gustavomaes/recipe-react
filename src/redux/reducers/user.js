import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    saved: false,
    isSaving: false,
    user: {},
    error: false,
    passwdUpdating: false,
    passwdUpdated: false,
    errorMessage: ''
}

export const updateUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: ''
    }
}

export const updateUserSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        user: action.user        
    }
}

export const updateUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true,
        errorMessage: action.error
    }
}

export const updatePasswdRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        passwdUpdating: true,
        error: false,
        errorMessage: ''
    }
}

export const updatePasswdSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        passwdUpdating: false,
        passwdUpdated: true     
    }
}

export const updatePasswdFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        passwdUpdating: false,
        passwdUpdated: false,
        error: true,
        errorMessage: action.error
    }
}

export const userReset = (state = INITIAL_STATE, action) => {
    return {
        saved: false,
        isSaving: false,
        user: {},
        error: false,
        errorMessage: ''
    }
}

export const HANDLERS = {
    [Types.UPDATE_USER_REQUEST]: updateUserRequest,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
    [Types.UPDATE_USER_FAILURE]: updateUserFailure,

    [Types.UPDATE_PASSWD_REQUEST]: updatePasswdRequest,
    [Types.UPDATE_PASSWD_SUCCESS]: updatePasswdSuccess,
    [Types.UPDATE_PASSWD_FAILURE]: updatePasswdFailure,

    [Types.USER_RESET]: userReset
    
}

export default createReducer(INITIAL_STATE, HANDLERS)