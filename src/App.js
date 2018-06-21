import React, { Component } from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'
import store from './redux'
import { Provider } from 'react-redux'

import './css/app.css'

import Home from './screens/Home';
import Restrict from './screens/restrict/index';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import MyAccount from './screens/MyAccount';
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
            <Route path="/admin" component={Home} />
            <Route path="/restrict" component={Restrict} />
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={SignUp} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
