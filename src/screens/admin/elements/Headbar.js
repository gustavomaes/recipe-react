import React from 'react'

import { Container, Image, Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ActionCreator from '../../../redux/actionCreators'
import logoImg from '../../../resources/logo.png'

const Headbar = (props) => {
    return (
        <Menu fixed='top' color='orange' inverted>
            <Container>
                <Menu.Item as={Link} to='/' header>
                    <Image size='mini' src={logoImg} style={{ marginRight: '1.5em' }} />
                    Receitas
                </Menu.Item>
                <Menu.Item as={Link} to='/admin'>Receitas</Menu.Item>
                <Menu.Item as={Link} to='/admin/users'>Usuários</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text={props.auth.user.name}>
                        <Dropdown.Menu>
                            {props.auth.user.role === 'admin' && <Dropdown.Item as={Link} to='/restrict'>Modo: Usuário</Dropdown.Item>}
                            <Dropdown.Item as={Link} to='/restrict/my-account'>Minha Conta</Dropdown.Item>
                            <Dropdown.Item onClick={props.logout}>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>

            </Container>
        </Menu>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(ActionCreator.destroyAuthRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Headbar)