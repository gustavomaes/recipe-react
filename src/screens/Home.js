import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Card } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import ActionCreators from '../redux/actionCreators'

import Headbar from './elements/Headbar';
import Cover from './elements/Cover';
import Recipe from './elements/Recipe';
import Footer from './elements/Footer';

class Home extends Component {

    componentDidMount() {
        this.props.load()
    }
    
    render() {

        if(this.props.auth.isAuth) {
            return <Redirect to='/restrict' />
        }

        return (
            <div>
                <Headbar />
                <Cover />

                <Container>
                    <br />

                    { this.props.recipes.isLoading && <p>Carregando...</p>}
                    { !this.props.recipes.isLoading &&

                        <div>
                            <Header as='h1'>Todas Receitas</Header>
                            <br />
                            <Card.Group itemsPerRow={3}>
                                {this.props.recipes.data.map((recipe) => <Recipe recipe={recipe}/>)}
                            </Card.Group>
                        </div>
                    }

                </Container>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(ActionCreators.getRecipesRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)