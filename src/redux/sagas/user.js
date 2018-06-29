import axios from 'axios'
import jwtDecode from "jwt-decode";
import { put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export function* updateUser(action) {
    const token = localStorage.getItem('token')

    try {
        const user = yield axios.put('http://localhost:3001/user', action.data, {
            headers: {
                'x-access-token': token
            }
        })
        yield put(ActionCreators.updateUserSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updateUserFailure(error.response.data.data.errors))
    }
}

export function* updateUserById(action) {
    const token = localStorage.getItem('token')

    try {        
        const user = yield axios.put(`http://localhost:3001/user/${action.id}`, action.data, {
            headers: {
                'x-access-token': token
            }
        })
        yield put(ActionCreators.updateUserIdSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updateUserIdFailure(error.response.data.data.errors))
    }
}

export function* updatePasswd(action) {
    const token = localStorage.getItem('token')

    try {
        const user = yield axios.put('http://localhost:3001/user/password', action.data, {
            headers: {
                'x-access-token': token
            }
        })
        yield put(ActionCreators.updatePasswdSuccess(user.data.data))
    } catch (error) {
        yield put(ActionCreators.updatePasswdFailure(error.response.data.message))
    }
}

export function* getUsers() {
    const token = localStorage.getItem('token')

    try {
        const users = yield axios.get('http://localhost:3001/user', {
            headers: {
                'x-access-token': token
            }
        })
        
        yield put(ActionCreators.getUsersSuccess(users.data))
    } catch (error) {
        yield put(ActionCreators.getUsersFailure(error.response.data.message))
    }
}

export function* getUserById(action) {
    const token = localStorage.getItem('token')

    try {
        const user = yield axios.get(`http://localhost:3001/user/${action.id}`, {
            headers: {
                'x-access-token': token
            }
        })
        
        yield put(ActionCreators.getUserIdSuccess(user.data))
    } catch (error) {
        yield put(ActionCreators.getUserIdFailure(error.response.data.message))
    }
}

export function* deleteUser(action) {
    const token = localStorage.getItem('token')

    try {
        yield axios.delete(`http://localhost:3001/user/${action.id}`, {
            headers: {
                'x-access-token': token
            }
        })
        
        yield put(ActionCreators.deleteUserSuccess(action.id))
    } catch (error) {
        yield put(ActionCreators.deleteUserFailure(error.response.data.message))
    }
}