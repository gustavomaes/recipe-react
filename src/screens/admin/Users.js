import React from 'react'

import { Table, Button, Icon, Container, Header } from 'semantic-ui-react'
import Footer from '../elements/Footer';
import Headbar from '../elements/Headbar';

const Users = () => {
    return (
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
                </Table.Body>
            </Table>
        </Container>

    )
}

export default Users