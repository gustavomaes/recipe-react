import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import ActionCreator from '../redux/actionCreators'
import logoImg from '../resources/logo.png'

class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }

    handleChange = (fieldname) => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    login = () => {
        const { email, password } = this.state.form
        this.props.login(email, password)
    }
    
    render() {

        if (this.props.auth.isAuth) {
            // if (this.props.auth.user.role === 'admin') {
            //     return <Redirect to='/admin' />
            // }
            return <Redirect to='/restrict' />
            
        }
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
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image as={Link} to='/' src={logoImg} /> Entre com a sua conta
                        </Header>
                        {this.props.auth.error &&
                            <Message negative>
                                <Message.Header>Erro ao tentar entrar</Message.Header>
                                <p>{this.props.auth.errorMessage}</p>
                            </Message>
                        }
                        <Form id='form_login' size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' type='email' value={this.state.form.email} onChange={this.handleChange('email')} />
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Senha' type='password' value={this.state.form.password} onChange={this.handleChange('password')} />
                                <Button color='orange' fluid size='large' onClick={this.login}>Entrar</Button>
                            </Segment>
                        </Form>
                        <Message> Novo por aqui? <Link to='/create-account'>Cadastre-se</Link> </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(ActionCreator.loginRequest(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)