import React from 'react'

import { Header, Image, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyRecipe = ({ recipe }) => {
    return (
        <Card>
            <Image src={recipe.photoUrl} />
            <Card.Content>
                <Card.Header>{recipe.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/restrict/edit/${recipe._id}`}>
                    <Icon name='edit' />
                    Editar
                </Link>
                <br />
                <Link to='/restrict/new'>
                    <Icon name='delete' />
                    Excluir
                </Link>
            </Card.Content>
        </Card>
    )
}

export default MyRecipe