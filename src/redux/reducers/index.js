import { combineReducers } from 'redux'

import recipes from './recipe'
import auth from './auth'
import user from './user'

const rootReducer = combineReducers({ recipes, auth, user })

export default rootReducer