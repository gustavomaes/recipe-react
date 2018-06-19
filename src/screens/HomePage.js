import React from 'react'

import { Container, Header, Card } from 'semantic-ui-react'

import Headbar from './elements/Headbar';
import Cover from './elements/Cover';
import Recipe from './elements/Recipe';
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
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />

            </Card.Group>



        </Container>

        <Footer />
    </div>
)

export default HomePage