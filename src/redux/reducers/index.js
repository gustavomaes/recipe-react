import { combineReducers } from 'redux'

import recipes from './recipe'
import auth from './auth'

const rootReducer = combineReducers({ recipes, auth })

export default rootReducer