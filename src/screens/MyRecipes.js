import React from 'react'

import { Container, Header, Card } from 'semantic-ui-react'

import Headbar from './elements/Headbar';
import Recipe from './elements/Recipe';
import Footer from './elements/Footer';
import MyRecipe from './elements/MyRecipe';

const MyRecipes = () => {
    return (
        <div>
            <Headbar />
            <Container>
                <br />
                <Header as='h1'>Minhas Receitas</Header>
                <br />
                <Card.Group itemsPerRow={3}>
                    <MyRecipe />
                    <MyRecipe />
                    <MyRecipe />
                    <MyRecipe />
                    <MyRecipe />
                    <MyRecipe />
                    <MyRecipe />
                </Card.Group>
            </Container>
            <Footer />
        </div>
    )
}

export default MyRecipes