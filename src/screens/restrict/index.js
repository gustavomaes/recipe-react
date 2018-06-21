import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import ActionCreators from '../../redux/actionCreators'


import Footer from '../elements/Footer';
import Headbar from './elements/Headbar';
import Home from './Home';

const Restrict = (props) => {
    if (!props.auth.isAuth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Headbar />
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
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