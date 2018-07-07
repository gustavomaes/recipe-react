import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const updateUser = ({ api }) => function* (action) {

    try {
        const user = yield call(api.updateUser, '', action.data)
        yield put(ActionCreators.updateUserSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updateUserFailure(error.response.data.data.errors))
    }
}

export const updateUserById = ({ api }) => function* (action) {
    try {        
        const user = yield call(api.updateUser, action.id, action.data)
        yield put(ActionCreators.updateUserIdSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updateUserIdFailure(error.response.data.data.errors))
    }
}

export const updatePasswd = ({ api }) => function* (action) {
    try {
        const user = yield call(api.updatePasswd, action.data)        
        yield put(ActionCreators.updatePasswdSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updatePasswdFailure(error.response.data.message))
    }
}

export function* getUsers(api) {
    try {
        const users = yield call(api.getUsers)        
        yield put(ActionCreators.getUsersSuccess(users.data))
    } catch (error) {
        yield put(ActionCreators.getUsersFailure(error.response.data.message))
    }
}

export const getUserById = ({ api }) => function* (action) {
    try {        
        const user = yield call(api.getUserById, action.id)
        yield put(ActionCreators.getUserIdSuccess(user.data))
    } catch (error) {
        yield put(ActionCreators.getUserIdFailure(error.response.data.message))
    }
}

export const deleteUser = ({ api }) => function* (action) {
    try {        
        yield call(api.removeUser, action.id)        
        yield put(ActionCreators.deleteUserSuccess(action.id))
    } catch (error) {
        yield put(ActionCreators.deleteUserFailure(error.response.data.message))
    }
}