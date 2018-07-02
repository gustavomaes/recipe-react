import sagaHelper from 'redux-saga-testing'
import { getRecipes } from '../recipes'

describe('should test getUsers', () => {


    const apiMock = {
        getRecipes: jest.fn()
    }

    const it = sagaHelper(getRecipes({apiMock}))
    it('should call getUsers', result => {
        console.log(result)
    })
})