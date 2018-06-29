import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ActionCreators from '../redux/actionCreators'
import logoImg from '../resources/logo.png'

class SignUp extends Component {
    state = {
        form: {
            name: '',
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

    create = () => {
        this.props.create(this.state.form)
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
                    <Grid.Column style={{ maxWidth: 550 }}>
                        <Header as='h2' color='orange' textAlign='center'>
                            <Image as={Link} to='/' src={logoImg} /> Cadastro
                        </Header>
                        {this.props.auth.error &&
                            <Message negative>
                                <Message.Header>Erro</Message.Header>
                                <p>{this.props.auth.errorMessage}</p>
                            </Message>
                        }
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='address card' iconPosition='left' placeholder='Nome' type='text' value={this.state.form.name} onChange={this.handleChange('name')}/>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' type='email' value={this.state.form.email} onChange={this.handleChange('email')}/>
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Senha' type='password' value={this.state.form.password} onChange={this.handleChange('password')}/>
                                <Button color='orange' fluid size='large' onClick={this.create}>Entrar</Button>
                            </Segment>
                        </Form>
                        <Message> Já possui uma conta? <Link to='/login'>Entrar</Link> </Message>
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
        create: (data) => dispatch(ActionCreators.createUserRequest(data))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignUp)