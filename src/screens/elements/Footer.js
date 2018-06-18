import React from 'react'

import { Container, Divider, List, Segment, Icon } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Segment color='orange' inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>

                Receitas foi desenvolvido por <b>Gustavo Maes</b>

                <Divider inverted section />
                <List horizontal inverted divided link>
                    <List.Item as='a' href='#'>
                        <Icon name='facebook f' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='pinterest' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='instagram' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='twitter' size='big' />
                    </List.Item>
                    <List.Item as='a' href='#'>
                        <Icon name='youtube' size='big' />
                    </List.Item>
                </List>
            </Container>
        </Segment>
    )
}

export default Footer