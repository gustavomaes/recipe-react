import React from 'react'

import { Container, Image, Menu } from 'semantic-ui-react'

import logoImg from '../../resources/logo.png'

const Headbar = () => {
    return (
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
    )
}

export default Headbar