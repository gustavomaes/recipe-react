import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    saved: false,
    isSaving: false,
    isLoading: false,
    data: [],
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

export const updateUserIdRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: ''
    }
}

export const updateUserIdSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true
    }
}

export const updateUserIdFailure = (state = INITIAL_STATE, action) => {
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

export const getUsersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: ''
    }
}

export const getUsersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.users
    }
}

export const getUsersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const getUserIdRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        saved: false,
        isLoading: true,
        error: false,
        errorMessage: ''
    }
}

export const getUserIdSuccess = (state = INITIAL_STATE, action) => {    
    return {
        ...state,
        isLoading: false,
        user: action.user
    }
}

export const getUserIdFailure = (state = INITIAL_STATE, action) => {    
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const deleteUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state
    }
}

export const deleteUserSuccess = (state = INITIAL_STATE, action) => {
    const users = [...state.data]
    const id = action.id
    const indexToDele = users.findIndex(user => user._id === id )
    users.splice(indexToDele, 1)

    return {
        ...state,
        data: users
    }
}

export const deleteUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.UPDATE_USER_REQUEST]: updateUserRequest,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
    [Types.UPDATE_USER_FAILURE]: updateUserFailure,

    [Types.UPDATE_USER_ID_REQUEST]: updateUserIdRequest,
    [Types.UPDATE_USER_ID_SUCCESS]: updateUserIdSuccess,
    [Types.UPDATE_USER_ID_FAILURE]: updateUserIdFailure,

    [Types.UPDATE_PASSWD_REQUEST]: updatePasswdRequest,
    [Types.UPDATE_PASSWD_SUCCESS]: updatePasswdSuccess,
    [Types.UPDATE_PASSWD_FAILURE]: updatePasswdFailure,

    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.GET_USER_ID_REQUEST]: getUserIdRequest,
    [Types.GET_USER_ID_SUCCESS]: getUserIdSuccess,
    [Types.GET_USER_ID_FAILURE]: getUserIdFailure,

    [Types.DELETE_USER_REQUEST]: deleteUserRequest,
    [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
    [Types.DELETE_USER_FAILURE]: deleteUserFailure,

    [Types.USER_RESET]: userReset
    
}

export default createReducer(INITIAL_STATE, HANDLERS)