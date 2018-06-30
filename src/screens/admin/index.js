import React from 'react'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Footer from '../elements/Footer';
import Headbar from './elements/Headbar';
import Home from './Home';
import MyAccount from '../MyAccount';
import Users from './Users';
import EditRecipe from '../EditRecipe';
import EditUser from './EditUser';

const Admin = (props) => {
    if (!props.auth.isAuth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Headbar />
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route path={`${props.match.path}/users`} component={Users} />
                <Route path={`${props.match.path}/edit-user/:id`} component={EditUser} />                
                <Route path={`${props.match.path}/my-account`} component={MyAccount} />
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

export default connect(mapStateToProps)(Admin)