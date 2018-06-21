import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Card } from 'semantic-ui-react'

import Cover from '../elements/Cover';
import ActionCreators from '../../redux/actionCreators'
import MyRecipe from './elements/MyRecipe';

class MyRecipes extends Component {
    
    componentDidMount() {
        this.props.load()
    }

    render() {
        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    
                    {this.props.recipes.isLoading && <p>Carregando...</p>}
                    {!this.props.recipes.isLoading &&

                        <div>
                            <Header as='h1'>Minhas Receitas</Header>
                            <br />
                            <Card.Group itemsPerRow={3}>
                                {this.props.recipes.data.map((recipe) => <MyRecipe recipe={recipe} key={recipe._id}/>)}
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
        load: () => dispatch(ActionCreators.getRecipesRequest('my'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyRecipes)