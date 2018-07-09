import sagaHelper from 'redux-saga-testing'
import { getUsers } from '../user'
import { call } from 'redux-saga/effects'

describe('should test user saga', () => {
    const apiMock = {
        getUsers: jest.fn()
    }

    const it = sagaHelper(getUsers(apiMock))

    it('should call getUsers', result => {
        expect(result).toEqual(call(apiMock.getUsers))
    })


})