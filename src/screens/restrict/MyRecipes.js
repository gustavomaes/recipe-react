import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container, Header, Card, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Cover from '../elements/Cover';
import ActionCreators from '../../redux/actionCreators'
import MyRecipe from './elements/MyRecipe';

class MyRecipes extends Component {
    
    state = {
        message: false,
        textHeader: '',
        textMessage: ''
    }

    componentDidMount() {
        this.props.load()
    }
    
    render() {

        if (this.props.recipes.saved) {
            this.setState({
                message: true,
                textHeader: 'Receita salva com sucesso',
                textMessage: 'Sua receita foi adicionada com sucesso.'
            })
            this.props.fullReset()
        }

        if (this.props.recipes.updated) {
            this.setState({
                message: true,
                textHeader: 'Receita atualizada com sucesso',
                textMessage: 'Sua receita foi atualizada com sucesso.'
            })
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
                            <Header as='h1'>Minhas Receitas</Header>
                            <br />
                            {this.state.message &&
                                <Message positive>
                                <Message.Header>{this.state.textHeader}</Message.Header>
                                <p>{this.state.textMessage}</p>
                              </Message>
                            }
        
                            <Button as={Link} to='/restrict/new' color='orange'>Nova Receita</Button>

                             <br />
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
        load: () => dispatch(ActionCreators.getMyRecipesRequest()),
        fullReset: () => dispatch(ActionCreators.fullRecipeReset())        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyRecipes)