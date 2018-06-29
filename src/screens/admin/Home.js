import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Card, Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Cover from '../elements/Cover';
import Recipe from '../elements/Recipe';
import ActionCreators from '../../redux/actionCreators'

class Home extends Component {

    componentDidMount() {
        this.props.load()
    }

    renderRecipe = (recipe) => {
        return (
            <Table.Row key={recipe._id}>
                <Table.Cell>{recipe.name}</Table.Cell>
                <Table.Cell>{recipe.user.name}</Table.Cell>
                <Table.Cell>
                    <Button animated as={Link} to={`/admin/edit/${recipe._id}`}>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                        <Button.Content hidden>Editar</Button.Content>
                    </Button>
                    <Button animated onClick={() => this.props.remove(recipe._id)}>
                        <Button.Content visible>
                            <Icon name='delete' />
                        </Button.Content>
                        <Button.Content hidden>Excluir</Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
    render() {
        
        if (this.props.recipes.updated) {
            this.props.fullReset()
        }

        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    {this.props.recipes.isLoading && <p>Carregando...</p>}
                    {!this.props.recipes.isLoading &&

                        <div>
                            
                            <Header as='h1'>Todas Receitas</Header>

                            <Table striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Título</Table.HeaderCell>
                                        <Table.HeaderCell>Usuário</Table.HeaderCell>
                                        <Table.HeaderCell>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.props.recipes.data.map(this.renderRecipe)}
                                </Table.Body>
                            </Table>
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
        load: () => dispatch(ActionCreators.getRecipesRequest()),
        fullReset: () => dispatch(ActionCreators.fullRecipeReset()),
        remove: (id) => dispatch(ActionCreators.deleteRecipeRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)