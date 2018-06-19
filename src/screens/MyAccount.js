import React from 'react'

import { Container, Header, Form, Segment, Button, Divider } from 'semantic-ui-react'

import Headbar from './elements/Headbar';
import Footer from './elements/Footer';

const MyAccount = () => {
    return (
        <div>
            <Headbar />
            <Container>
                <br />
                <br />
                <Header as='h1'>Minha Conta</Header>
                <br />

                <Form>
                    <Form.Field>
                        <label>Nome</label>
                        <input type='text' />
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <input type='email' />
                    </Form.Field>

                    <Button color='orange'>Salvar</Button>
                </Form>

                <br />
                <Divider />
                
                <Header as='h1'>Alterar Senha</Header>

                <Form>
                    <Form.Field>
                        <label>Senha atual</label>
                        <input type='password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Nova Senha</label>
                        <input type='password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Repita a nova senha</label>
                        <input type='password' />
                    </Form.Field>

                    <Button color='orange'>Alterar Senha</Button>
                </Form>
            </Container>
            <Footer />
        </div>
    )
}

export default MyAccount