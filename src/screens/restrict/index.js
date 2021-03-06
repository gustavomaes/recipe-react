import React from 'react'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Footer from '../elements/Footer';
import Headbar from './elements/Headbar';
import Home from './Home';
import MyRecipes from './MyRecipes';
import NewRecipe from './NewRecipe';
import MyAccount from '../MyAccount';
import EditRecipe from '../EditRecipe';

const Restrict = (props) => {
    if (!props.auth.isAuth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Headbar />
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route path={`${props.match.path}/my-account`} component={MyAccount} />
                <Route path={`${props.match.path}/my`} component={MyRecipes} />
                <Route path={`${props.match.path}/new`} component={NewRecipe} />
                <Route path={`${props.match.path}/edit/:id`} component={EditRecipe} />
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Restrict)