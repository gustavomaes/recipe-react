import React from 'react'

import { Header, Image, Card, Button, Icon } from 'semantic-ui-react'

const MyRecipe = () => {
    return (
        <Card>
            <Image src='https://picsum.photos/500/300/?random' />
            <Card.Content>
                <Card.Header>Receita 01</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='edit' />
                    Editar
                </a>
                <br />
                <a>
                    <Icon name='delete' />
                    Excluir
                </a>
            </Card.Content>
        </Card>
    )
}

export default MyRecipe