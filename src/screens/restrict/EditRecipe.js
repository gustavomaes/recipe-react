import React, { Component } from 'react'

import { Container, Header, Form, Segment, Button, Divider, Input, List, Icon, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ActionCreator from '../../redux/actionCreators'

class EditRecipe extends Component {

    state = {
        src: null,
        form: {
            name: '',
            time: '',
            serving: '',
            ingredients: [],
            ingredient: '',
            preparation: [],
            step: ''
        }

    }

    componentDidMount() {        
        this.props.fullReset()
        this.props.load(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.recipe.recipe._id !== undefined) {

            const form = {
                ...this.state.form
            }

            form['name'] = nextProps.recipe.recipe.name
            form['time'] = nextProps.recipe.recipe.time
            form['serving'] = nextProps.recipe.recipe.serving
            form['ingredients'] = [...nextProps.recipe.recipe.ingredients]
            form['preparation'] = [...nextProps.recipe.recipe.preparation]
            
            this.setState({ form })
        }
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener(
                'load',
                () =>
                    this.setState({
                        src: reader.result,
                    }),
                false
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    handleChange = (fieldname) => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    handleListChange = (fieldname) => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    handleClick = (fieldname, fieldnameform) => event => {
        const form = {
            ...this.state.form
        }

        if (form[fieldnameform] === '') {
            return
        }

        let list = [...form[fieldname], form[fieldnameform]]

        form[fieldname] = list
        form[fieldnameform] = ''
        this.setState({ form })

    }

    handleRemove = (fieldname, position) => event => {
        const form = {
            ...this.state.form
        }
        let list = form[fieldname]
        list.splice(position, 1);

        form[fieldname] = list
        this.setState({ form })
    }

    render() {

        if (this.props.recipe.updated && !this.props.recipe.isLoading) {
            console.log('render')
            this.props.reset()
            return <Redirect to='/restrict/my' />
        }
        
        return (
            <Container>
                <br />
                <br />
                <Header as='h1'>Nova Receita</Header>
                <br />

                {this.props.recipe.error &&
                    <Message negative>
                        <Message.Header>Erro ao tentar entrar</Message.Header>
                        {Object.keys(this.props.recipe.errorsMessage).map(key => {
                            return <p>{this.props.recipe.errorsMessage[key].message}</p>
                        })}
                    </Message>
                    
            }
                <Form>
                    <Form.Field>
                        <label>Foto</label>

                        <input type="file" onChange={this.onSelectFile} />
                        <br />
                        {this.state.src &&
                            <img src={this.state.src} />
                        }
                    </Form.Field>

                    <Form.Field>
                        <label>Título</label>
                        <input type='text' value={this.state.form.name} onChange={this.handleChange('name')} />
                    </Form.Field>
                    <Form.Field>
                        <label>Tempo de preparo</label>
                        <input type='text' value={this.state.form.time} onChange={this.handleChange('time')} />
                    </Form.Field>

                    <Form.Field>
                        <label>Serve quantas pessoas ?</label>
                        <input type='number' value={this.state.form.serving} onChange={this.handleChange('serving')} />
                    </Form.Field>
                </Form>

                <br />
                <Divider />

                <Header as='h1'>Ingredientes</Header>

                <Input className='input-fill'
                    value={this.state.form.ingredient}
                    onChange={this.handleListChange('ingredient')}
                    action={<Button color='orange'
                        icon='plus'
                        onClick={this.handleClick('ingredients', 'ingredient')} />}
                    size='medium'
                    placeholder='Informe o ingrediente' />

                <List>

                    {this.state.form.ingredients.map((i, position) => {
                        return (
                            <List.Item key={position}>
                                <List.Content>
                                    <Icon link color='red' name='delete' onClick={this.handleRemove('ingredients', position)} />
                                    {i}
                                </List.Content>
                            </List.Item>)
                    })}

                </List>

                <br />
                <Divider />

                <Header as='h1'>Modo de Preparo</Header>

                <Input className='input-fill'
                    value={this.state.form.step}
                    onChange={this.handleListChange('step')}
                    action={<Button color='orange'
                        icon='plus'
                        onClick={this.handleClick('preparation', 'step')} />}
                    size='medium'
                    placeholder='Descreva os passos para prepar a receita' />

                <List ordered>
                    {this.state.form.preparation.map((p, position) => {
                        return (
                            <List.Item key={position}>
                                <List.Content>
                                    <Icon link color='red' name='delete' onClick={this.handleRemove('preparation', position)} />
                                    {p}
                                </List.Content>
                            </List.Item>)
                    })}


                </List>

                <br />
                <Divider />
                <br />

                <Button color='orange' onClick={() => {
                    this.props.update({
                        'id': this.props.match.params.id,
                        'name': this.state.form.name,
                        'time': this.state.form.time,
                        'serving': this.state.form.serving,
                        'ingredients': this.state.form.ingredients,
                        'preparation': this.state.form.preparation,
                        'photo': this.state.src
                    })
                }}>Salvar</Button>

            </Container>
        )
    }
}

const mapStateToForms = (state) => {
    return {
        recipe: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (id) => dispatch(ActionCreator.getOneRecipeRequest(id)),
        update: (data) => dispatch(ActionCreator.updateRecipeRequest(data)),
        reset: () => dispatch(ActionCreator.createRecipeReset()),
        fullReset: () => dispatch(ActionCreator.fullRecipeReset())
    }
}

export default connect(mapStateToForms, mapDispatchToProps)(EditRecipe)