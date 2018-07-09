import React from 'react'

import { Container, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import logoImg from '../../resources/logo-white.png'

const Headbar = () => {
    return (
        <Menu fixed='top' color='orange' inverted>
            <Container>
                <Menu.Item as={Link} to='/' header>
                    Principal
                </Menu.Item>
                <Menu.Item as={Link} to='/login' position='right'>Entrar</Menu.Item>
                <Menu.Item as={Link} to='/create-account' >Cadastrar</Menu.Item>


            </Container>
        </Menu>
    )
}

export default Headbar