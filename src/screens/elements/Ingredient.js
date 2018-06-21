import React from 'react'

import { List } from 'semantic-ui-react'

const Ingredient = ({ item }) => {
    console.log(item)
    return (
        <List.Item>
            <List.Icon name='arrow right' />
            <List.Content>{item}</List.Content>
        </List.Item>
    )
}

export default Ingredient