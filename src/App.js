import React, { Component } from 'react'

import HomePage from './screens/HomePage';

import './css/app.css'
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
      <div>

        {/*<HomePage />*/}
        {/*<Login />*/}
        {/*<SignUp />*/}
        <MyRecipes />
        {/*<MyAccount />*/}
        {/*<NewRecipe />*/}
        {/*<EditRecipe />*/}
        {/*<EditUser />*/}
        {/*<Users />*/}
        
      </div>
    )
  }
}

export default App
