import React from 'react'

import { Container, Header, Card, Grid, GridRow } from 'semantic-ui-react'

import Headbar from './elements/Headbar';
import Cover from './elements/Cover';
import RecipeCard from './elements/RecipeCard';
import Footer from './elements/Footer';

const HomePage = () => (
    <div>
        <Headbar />
        <Cover />
        <Container>
            <br />
            <Header as='h1'>Todas Receitas</Header>
            <br />
            <Card.Group itemsPerRow={3}>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />

            </Card.Group>



        </Container>

        <Footer />
    </div>
)

export default HomePage