import React from 'react'

import { Table, Button, Icon, Container, Header } from 'semantic-ui-react'
import Footer from '../elements/Footer';
import Headbar from '../elements/Headbar';

const Users = () => {
    return (
        <div>
            <Headbar />
            <Container>

                <br />
                <br />
                <Header as='h1'>Todos Usuários</Header>

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>E-mail</Table.HeaderCell>
                            <Table.HeaderCell>Tipo</Table.HeaderCell>
                            <Table.HeaderCell>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Gustavo Maes</Table.Cell>
                            <Table.Cell>gustavo@gmail.com</Table.Cell>
                            <Table.Cell>Administrador</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>João Silva</Table.Cell>
                            <Table.Cell>joao@gmail.com</Table.Cell>
                            <Table.Cell>Usuário</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Maria COnceição</Table.Cell>
                            <Table.Cell>maria@gmail.com</Table.Cell>
                            <Table.Cell>Usuário</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Panasonic Maes</Table.Cell>
                            <Table.Cell>pana@gmail.com</Table.Cell>
                            <Table.Cell>Usuário</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Avelã Dutra</Table.Cell>
                            <Table.Cell>vela@gmail.com</Table.Cell>
                            <Table.Cell>Usuário</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Lisa Dutra</Table.Cell>
                            <Table.Cell>lisa@gmail.com</Table.Cell>
                            <Table.Cell>Usuário</Table.Cell>
                            <Table.Cell>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='edit' />
                                    </Button.Content>
                                    <Button.Content hidden>Editar</Button.Content>
                                </Button>
                                <Button animated>
                                    <Button.Content visible>
                                        <Icon name='delete' />
                                    </Button.Content>
                                    <Button.Content hidden>Excluir</Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
            <Footer />
        </div>

    )
}

export default Users