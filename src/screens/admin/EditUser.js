import React from 'react'

import { Container, Header, Form, Segment, Button, Divider } from 'semantic-ui-react'

import Headbar from '../elements/Headbar';
import Footer from '../elements/Footer';

const EditUser = () => {
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

                    <label>Tipo:</label>
                    <select value='user' >
                        <option value='admin'>Administrador</option>
                        <option value='user'>Usuário</option>
                    </select>

                    <br />
                    <Button color='orange'>Salvar</Button>
                </Form>

                
            </Container>
            <Footer />
        </div>
    )
}

export default EditUser