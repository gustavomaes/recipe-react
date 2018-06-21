import React, { Component } from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './redux'
import { Provider } from 'react-redux'

import './css/app.css'

import Home from './screens/Home';
import Restrict from './screens/restrict/index';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MyRecipes from './screens/MyRecipes';
import MyAccount from './screens/MyAccount';
import NewRecipe from './screens/NewRecipe';
import EditRecipe from './screens/EditRecipe';
import EditUser from './screens/admin/EditUser';
import Users from './screens/admin/Users';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Home} />
            <Route exact path="/restrict" component={Restrict} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-account" component={SignUp} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
