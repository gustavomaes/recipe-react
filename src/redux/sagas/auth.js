import jwtDecode from "jwt-decode";
import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const auth = ({ api }) => function* () {
    const token = localStorage.getItem('token')

    if (token) {
        try {
            const user = yield call(api.getUserById, 'me')
            yield put(ActionCreators.authSuccess(user.data))
        } catch (e) {
            yield put(ActionCreators.authFailure('invalid token'))
        }
    } else {
        yield put(ActionCreators.authFailure())
    }
}

export const login = ({ api }) => function* (action) {
    try {
        let login = yield call(api.login, {
            email: action.email,
            password: action.passwd
        })

        if (login.data.token) {
            const user = setUserToken(login)
            yield put(ActionCreators.loginSuccess(user))
        }
    } catch (e) {
        yield put(ActionCreators.loginFailure(e.response.data.message))
    }
}

export const createUser = ({ api }) => function* (action) {
    try {
        let user = yield call(api.createUser, action.data)

        if (user.data.token) {
            const userDecoded = setUserToken(user)            
            yield put(ActionCreators.createUserSuccess(userDecoded))
        }
    } catch (e) {
        yield put(ActionCreators.createUserFailure(e.response.data.message))
    }
}

export function* destroyAuth() {
    localStorage.removeItem('token')
    yield put(ActionCreators.destroyAuthSuccess())
}

const setUserToken = (data) => {
    let token = data.data.token
    localStorage.setItem('token', token)
    return jwtDecode(token)
}