import React, { Component } from 'react'

import { Header, Image, Card, Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ActionCreators from '../../../redux/actionCreators'


class MyRecipe extends Component {

    state = { open: false }

    close = () => this.setState({ open: false })
    open = () => this.setState({ open: true })

    render() {
        const { open } = this.state

        return (
            <Card>
                <Image src={this.props.recipe.photoUrl} />
                <Card.Content>
                    <Card.Header>{this.props.recipe.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/restrict/edit/${this.props.recipe._id}`}>
                        <Icon name='edit' />
                        Editar
                    </Link>
                    <br />
                    <a onClick={() => this.props.remove(this.props.recipe._id)}>
                        <Icon name='delete' />
                        Excluir
                    </a>
                </Card.Content>
            </Card>              
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(ActionCreators.deleteRecipeRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRecipe)