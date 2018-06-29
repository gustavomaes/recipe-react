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
        console.log(error.response)
        yield put(ActionCreators.updatePasswdFailure(error.response.data.message))
    }
}