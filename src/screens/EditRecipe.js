import React, { Component } from 'react'

import { Container, Header, Form, Segment, Button, Divider, Input, List, Icon } from 'semantic-ui-react'

import Headbar from './elements/Headbar';
import Footer from './elements/Footer';

class EditRecipe extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return (
            <div>
                <Headbar />
                <Container>
                    <br />
                    <br />
                    <Header as='h1'>Nova Receita</Header>
                    <br />

                    <Form>
                        <Form.Field>
                            <label>Foto</label>
                            <input type='file' accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange}/>
                            <br />
                            <img className='img-container' src={this.state.file}/>

                        </Form.Field>

                        <Form.Field>
                            <label>Título</label>
                            <input type='text' />
                        </Form.Field>
                        <Form.Field>
                            <label>Tempo de preparo</label>
                            <input type='text' />
                        </Form.Field>

                        <Form.Field>
                            <label>Serve quantas pessoas ?</label>
                            <input type='number' />
                        </Form.Field>

                        <Button color='orange'>Criar</Button>
                    </Form>

                    <br />
                    <Divider />

                    <Header as='h1'>Ingredientes</Header>

                    <Input className='input-fill' action={{ color: 'orange', icon: 'plus' }} size='medium' placeholder='Informe o ingrediente' />

                    <List>
                        <List.Item>
                            <List.Content>
                                <Icon link color='red' name='delete' />
                                2 xícaras de fubá mimoso
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <Icon link color='red' name='delete' />
                                4 colheres de sopa de óleo
                            </List.Content>
                        </List.Item>

                    </List>

                    <br />
                    <Divider />

                    <Header as='h1'>Modo de Preparo</Header>

                    <Input className='input-fill' action={{ color: 'orange', icon: 'plus' }} size='medium' placeholder='Descreva os passos para prepar a receita' />

                    <List ordered>
                        <List.Item>
                            <List.Content>
                                <Icon link color='red' name='delete' />
                                Dissolva o fubá em 2 copos de água fria, leve a panela em fogo médio e adicione o óleo, cebola, alho e o sal
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <Icon link color='red' name='delete' />
                                Em seguida acrescente o fubá já diluído (na água toda), mexendo de preferência com uma colher de pau por mais ou menos 15 minutos, até obter uma consistência bem firme na polenta
                            </List.Content>
                        </List.Item>
                    </List>

                </Container>
                <Footer />
            </div>
        )
    }
}

export default EditRecipe