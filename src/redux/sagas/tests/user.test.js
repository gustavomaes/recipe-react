import sagaHelper from 'redux-saga-testing'
import { getUsers } from '../user'
import { put, call } from 'redux-saga/effects'

describe('should test getUsers', () => {
    const apiMock = {
        getUsers: jest.fn()
    }

    const it = sagaHelper(getUsers(apiMock))

    it('should call getUsers', result => {
        console.log(result)
    })


})