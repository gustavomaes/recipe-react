import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Card } from 'semantic-ui-react'

import Cover from '../elements/Cover';
import Recipe from '../elements/Recipe';
import ActionCreators from '../../redux/actionCreators'

class Home extends Component {
    
    componentDidMount() {
        this.props.load()
    }

    render() {
        return (
            <div>
                <Cover />

                <Container>
                    <br />

                    {this.props.recipes.isLoading && <p>Carregando...</p>}
                    {!this.props.recipes.isLoading &&

                        <div>
                            <Header as='h1'>Todas Receitas</Header>
                            <br />
                            <Card.Group itemsPerRow={3}>
                                {this.props.recipes.data.map((recipe) => <Recipe recipe={recipe} />)}
                            </Card.Group>
                        </div>
                    }

                </Container>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)