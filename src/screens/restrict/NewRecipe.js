import React, { Component } from 'react'

import { Container, Header, Form, Segment, Button, Divider, Input, List, Icon } from 'semantic-ui-react'

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class NewRecipe extends Component {



    constructor(props) {
        super(props)


        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        src: null,
        crop: {
            x: 10,
            y: 10,
            width: 30.72,
            height: 17.28,
            aspect: 16 / 9
        }

    }

    onCropChange = (crop) => {
        this.setState({ crop });
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
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


    getCroppedImg(image, pixelCrop, fileName) {

        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        // As Base64 string
        return new Promise((resolve, reject) => canvas.toDataURL('image/jpeg'))
    }

    render() {
        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <Header as='h1'>Nova Receita</Header>
                    <br />

                    <Form>
                        <Form.Field>
                            <label>Foto</label>
                            {/*<input type='file' accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange} />*/}
                            <input type="file" onChange={this.onSelectFile} />
                            <br />
                            {this.state.src && (
                                <ReactCrop src={this.state.src} crop={this.state.crop} onChange={this.onCropChange} />
                            )}
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

                        <Button color='orange' onClick={() => {
                            // console.log(this.state.src)
                            const croppedImg = this.getCroppedImg(this.state.src, this.state.crop, 'returnedFileName')
                            .then( console.log('sdasd'));

                        }}>Criar</Button>
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
            </div>
        )
    }
}

export default NewRecipe