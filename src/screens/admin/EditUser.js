import React, { Component } from 'react'

import { Container, Header, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ActionCreators from '../../redux/actionCreators'

class EditUser extends Component {

    state = {
        form: {
            name: '',
            email: '',
            role: ''
        }
    }

    componentDidMount() {
        this.props.load(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.user._id !== undefined) {

            const form = {
                ...this.state.form
            }

            form['name'] = nextProps.user.user.name
            form['email'] = nextProps.user.user.email
            form['role'] = nextProps.user.user.role

            this.setState({ form })
        }
    }

    handleChange = (fieldname) => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    render() {
        if (this.props.user.saved) {
            return <Redirect to='/admin/users' />
        }

        return (
            <Container>
                <br />
                <br />
                <Header as='h1'>Alterar Usuário</Header>
                <br />

                <Form>
                    <Form.Field>
                        <label>Nome</label>
                        <input type='text' value={this.state.form.name} onChange={this.handleChange('name')}/>
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail</label>
                        <input type='email' value={this.state.form.email} onChange={this.handleChange('email')}/>
                    </Form.Field>

                    <label>Tipo:</label>
                    <select value={this.state.form.role} onChange={this.handleChange('role')}>
                        <option value='admin'>Administrador</option>
                        <option value='user'>Usuário</option>
                    </select>

                    <br />
                    <Button color='orange' onClick={() => this.props.update(this.props.match.params.id, this.state.form)}>Salvar</Button>
                </Form>


            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (id) => dispatch(ActionCreators.getUserIdRequest(id)),
        update: (data, id) => dispatch(ActionCreators.updateUserIdRequest(data, id)),
        reset: () => dispatch(ActionCreators.userReset())        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)