import axios from 'axios'
import jwtDecode from "jwt-decode";
import { put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export function* auth() {
    const token = localStorage.getItem('token')

    if (token) {
        try {
            const user = yield axios.get('http://localhost:3001/user/me', {
                headers: {
                    'x-access-token': token
                }
            })
            yield put(ActionCreators.authSuccess(user.data))
        } catch (e) {
            yield put(ActionCreators.authFailure('invalid token'))
        }
    } else {
        yield put(ActionCreators.authFailure())
    }
}

export function* login(action) {
    let login = {}

    try {
        login = yield axios.post('http://localhost:3001/user/auth', {
            email: action.email,
            password: action.passwd
        })
        if (login.data.token) {
            let token = login.data.token
            localStorage.setItem('token', token)
            const user = jwtDecode(token)
    
            yield put(ActionCreators.loginSuccess(user))
        }
    } catch (e){
        yield put(ActionCreators.loginFailure(e.response.data.message))        
    }
}

export function* createUser(action) {
    let user = {}

    try {
        user = yield axios.post('http://localhost:3001/user', action.data)

        if (user.data.token) {            
            let token = user.data.token
            localStorage.setItem('token', token)
            const userDecoded = jwtDecode(token)
            yield put(ActionCreators.createUserSuccess(userDecoded))
        }
    } catch (e){
        yield put(ActionCreators.createUserFailure(e.response.data.message))        
    }
}

export function* destroyAuth() {
    localStorage.removeItem('token')

    yield put(ActionCreators.destroyAuthSuccess())
}