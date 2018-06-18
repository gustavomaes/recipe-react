import React from 'react'

import { Divider, Header, Image, List, Button, Card, Icon, Modal } from 'semantic-ui-react'

const RecipeCard = () => {
    return (
        <Modal trigger={
            <Card>
                <Image src='https://picsum.photos/500/300/?random' />
                <Card.Content>
                    <Card.Header>Receita 01</Card.Header>
                    <Card.Description>
                        <span>Por </span>
                        <span className='user-by'>Gustavo Maes</span>
                    </Card.Description>
                </Card.Content>
            </Card>

        }>
            <Modal.Header>POLENTA FRITA CROCANTE</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <Image size='huge' src='https://picsum.photos/1024/720/?random' centered />
                    <Divider />
                    <Header>Descrição</Header>
                    <Icon name='clock outline' /> 45 min
                    <br />
                    <Icon name='food' /> Rende 6 porções
                    <Divider />
                    <Header>Ingredientes</Header>
                    <List>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>2 xícaras de fubá mimoso</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>4 colheres de sopa de óleo</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>1 litro de água fervente</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>1/2 colher de sopa de sal</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>3 dentes de alho amassados</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='arrow right' />
                            <List.Content>1 cebola pequena ralada</List.Content>
                        </List.Item>

                    </List>

                    <Divider />
                    <Header>Modo de Preparo</Header>
                    <List ordered>
                        <List.Item as='p'>Dissolva o fubá em 2 copos de água fria, leve a panela em fogo médio e adicione o óleo, cebola, alho e o sal</List.Item>
                        <List.Item as='p'>Em seguida acrescente o fubá já diluído (na água toda), mexendo de preferência com uma colher de pau por mais ou menos 15 minutos, até obter uma consistência bem firme na polenta</List.Item>
                        <List.Item as='p'>Despeje em uma travessa e deixe esfriar, corte em pedaços, passe no fubá (com os pedaços ainda mornos) e frite em óleo bem quente</List.Item>
                    </List>

                </Modal.Description>
            </Modal.Content>
            
        </Modal>
    )
}

export default RecipeCard