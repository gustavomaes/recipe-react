import React, { Component } from 'react'

import { Table, Button, Icon, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ActionCreators from '../../redux/actionCreators'

class Users extends Component {

    componentDidMount() {
        this.props.load()
    }

    renderUser = (user) => {
        return (
            <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                    <Button animated as={Link} to={`/admin/edit-user/${user._id}`}>
                        <Button.Content visible>
                            <Icon name='edit' />
                        </Button.Content>
                        <Button.Content hidden>Editar</Button.Content>
                    </Button>
                    <Button animated onClick={() => this.props.remove(user._id)}>
                        <Button.Content visible>
                            <Icon name='delete' />
                        </Button.Content>
                        <Button.Content hidden>Excluir</Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return (
            <Container>
                { !this.props.users.data && <p>Carregando</p>}
                { this.props.users.data && 
                
                <div>

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
                        {this.props.users.data.map(this.renderUser)}
                    </Table.Body>
                </Table>
                </div>
            }
            </Container>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(ActionCreators.getUsersRequest()),
        remove: (id) => dispatch(ActionCreators.deleteUserRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)