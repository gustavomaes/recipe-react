import React from 'react'

import { List } from 'semantic-ui-react'

const Preparation = ({ item }) => {
    return (
        <List.Item>
            <List.Item as='p'>{item}</List.Item>
        </List.Item>
    )
}

export default Preparation