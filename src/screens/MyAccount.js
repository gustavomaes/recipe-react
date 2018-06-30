import React, { Component } from 'react'

import { Container, Header, Form, Button, Divider, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ActionCreators from '../redux/actionCreators'

class MyAccount extends Component {

    state = {
        saved: false,
        passwdUpdated: false,
        error: false,
        errorMessage: '',
        form: {
            name: '',
            email: ''
        },
        formPasswd: {
            password: '',
            newPassword: '',
            newPassword2: ''
            
        }
    }

    componentDidMount() {
        const form = {
            ...this.state.form
        }

        form['name'] = this.props.auth.user.name
        form['email'] = this.props.auth.user.email

        this.setState({ form })
    }

    handleChange = (fieldname) => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    handleChangePasswd = (fieldname) => event => {
        const formPasswd = {
            ...this.state.formPasswd
        }
        formPasswd[fieldname] = event.target.value
        this.setState({ formPasswd })
    }

    changePasswd = () => {
        const form = {
            ...this.state.formPasswd
        }

        if (form.newPassword !== form.newPassword2) {
            this.setState({
                error: true,
                errorMessage: 'Senhas não são iguais'
            })
            return
        }

        this.props.updatePasswd(form)
    }

    render() {
        if (this.props.user.saved) {
            this.setState({ saved: true })
            this.props.updateAuth(this.props.user.user)
            console.log(this.props.user)
            this.props.reset()
        }

        if (this.props.user.error) {
            this.setState({
                error: true,                
                errorMessage: this.props.user.errorMessage
            })
            this.props.reset()            
        }

        if (this.props.user.passwdUpdated) {
            this.setState({ 
                error: false,
                passwdUpdated: true 
            })
            this.props.reset()            
        }

        return (
            <Container>
                <br />
                <br />
                <Header as='h1'>Minha Conta</Header>
                <br />

                {this.state.saved &&
                    <Message positive>
                        <Message.Header>Usuário atualizado</Message.Header>
                        <p>Usuário atualizado com sucesso</p>
                    </Message>
                }

                <Form>
                    <Form.Field>
                        <label>Nome</label>
                        <input type='text' value={this.state.form.name} onChange={this.handleChange('name')} />
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <input type='email' value={this.state.form.email} onChange={this.handleChange('email')} />
                    </Form.Field>

                    <Button color='orange' onClick={() => this.props.update(this.state.form)}>Atualizar</Button>
                </Form>

                <br />
                <Divider />

                <Header as='h1'>Alterar Senha</Header>

                {this.state.error &&
                    <Message negative>
                        <Message.Header>Erro</Message.Header>
                        <p>{this.state.errorMessage}</p>
                    </Message>
                }

                {this.state.passwdUpdated &&
                    <Message positive>
                        <Message.Header>Senha alterada</Message.Header>
                        <p>Senha alterada com sucesso.</p>
                    </Message>
                }

                <Form>
                    <Form.Field>
                        <label>Senha atual</label>
                        <input type='password' value={this.state.formPasswd.password} onChange={this.handleChangePasswd('password')}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Nova Senha</label>
                        <input type='password' value={this.state.formPasswd.newPassword} onChange={this.handleChangePasswd('newPassword')}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Repita a nova senha</label>
                        <input type='password' value={this.state.formPasswd.newPassword2} onChange={this.handleChangePasswd('newPassword2')}/>
                    </Form.Field>

                    <Button color='orange' onClick={this.changePasswd}>Alterar Senha</Button>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (data) => dispatch(ActionCreators.updateUserRequest(data)),
        updatePasswd: (data) => dispatch(ActionCreators.updatePasswdRequest(data)),
        updateAuth: (user) => dispatch(ActionCreators.updateUser(user)),
        reset: () => dispatch(ActionCreators.userReset())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)