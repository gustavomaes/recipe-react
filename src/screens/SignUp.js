import React from 'react'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import logoImg from '../resources/logo.png'

const SignUp = () => {
    return (
        <div className='login-form'>
            <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
            `}</style>

            <Grid className='grid-center' textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 550 }}>
                    <Header as='h2' color='orange' textAlign='center'>
                        <Image src={logoImg} /> Cadastro
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='address card' iconPosition='left' placeholder='Nome' type='text' />
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' type='email' />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Senha' type='password' />
                            <Button color='orange' fluid size='large'>Entrar</Button>
                        </Segment>
                    </Form>
                    <Message> Já possui uma conta? <a href='#'>Entrar</a> </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SignUp