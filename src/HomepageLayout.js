import React from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Label,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Button,
    Card,
    Icon,
    Modal
} from 'semantic-ui-react'

import logoImg from './resources/logo.png'
import coverImg from './resources/cover.jpg'
import './css/app.css'

const HomepageLayout = () => (
    <div>
        <Menu fixed='top' color='orange' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src={logoImg} style={{ marginRight: '1.5em' }} />
                    Receitas
          </Menu.Item>
                <Menu.Item as='a'>Início</Menu.Item>
                <Menu.Item as='a' position='right'>Entrar</Menu.Item>
                <Menu.Item as='a' >Cadastrar</Menu.Item>


            </Container>
        </Menu>

        <div className='cover-image-wrapper'>
            <Image className='cover-image-wrapper' src={coverImg} />
            <h1>Compartilhe suas receitas com o mundo.</h1>
        </div>

        <Container>
            <br />
            <Header as='h1'>Todas Receitas</Header>
            <br />



            <Card.Group itemsPerRow={3}>

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
                            <Image size='fullscreen' src='https://picsum.photos/1024/720/?random' centered />
                            <Divider />
                            <Header>Ingredientes</Header>
                            <List>
                                <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>2 xícaras de fubá mimoso</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>4 colheres de sopa de óleo</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>1 litro de água fervente</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>1/2 colher de sopa de sal</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='food' />
                                    <List.Content>3 dentes de alho amassados</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='food' />
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
                    <Modal.Actions>
                        <Button primary>
                            Ok <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Card href='/'>
                    <Image src='https://picsum.photos/500/300/?random' />
                    <Card.Content>
                        <Card.Header>Receita 01</Card.Header>
                        <Card.Description>
                            <span>Por </span>
                            <span className='user-by'>Gustavo Maes</span>
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card href='/'>
                    <Image src='https://picsum.photos/500/300/?random' />
                    <Card.Content>
                        <Card.Header>Receita 01</Card.Header>
                        <Card.Description>
                            <span>Por </span>
                            <span className='user-by'>Gustavo Maes</span>
                        </Card.Description>
                    </Card.Content>
                </Card>

            </Card.Group>



        </Container>

        <Segment color='orange' inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>

                Receitas foi desenvolvido por <b>Gustavo Maes</b>

                <Divider inverted section />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>
                        <Icon name='facebook f' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='pinterest' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='instagram' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='twitter' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='youtube' size='big' />
                    </List.Item>
                </List>
            </Container>
        </Segment>
    </div>
)

export default HomepageLayout