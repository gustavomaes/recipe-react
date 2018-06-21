import React from 'react'

import { Divider, Header, Image, List, Card, Icon, Modal, Button } from 'semantic-ui-react'
import Ingredient from './Ingredient';
import Preparation from './Preparation';

const Recipe = ({ recipe }) => {
    return (
        <Modal trigger={
            <Card>
                <Image src={recipe.photoUrl} />
                <Card.Content>
                    <Card.Header>{recipe.name}</Card.Header>
                    <Card.Description>
                        <span>Por </span>
                        <span className='user-by'>{recipe.user.name}</span>
                    </Card.Description>
                </Card.Content>
            </Card>
        }>
            <Modal.Header>{recipe.name}</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <Image size='huge' src={recipe.photoUrl} centered />
                    <Divider />
                    <Header>Descrição</Header>
                    <Icon name='clock outline' /> {recipe.time}
                    <br />
                    <Icon name='food' /> Rende {recipe.serving} porções
                    <Divider />
                    <Header>Ingredientes</Header>
                    <List>
                        {recipe.ingredients.map(i => <Ingredient item={i}/>)}
                    </List>

                    <Divider />
                    <Header>Modo de Preparo</Header>
                    <List ordered>
                        {recipe.preparation.map((i) => <Preparation item={i} />)}
                    </List>

                </Modal.Description>
            </Modal.Content>

        </Modal>
    )
}

export default Recipe