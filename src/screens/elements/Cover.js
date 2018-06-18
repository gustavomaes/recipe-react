import React from 'react'

import { Image } from 'semantic-ui-react'

import coverImg from '../../resources/cover.jpg'

const Cover = () => {
    return (
        <div className='cover-image-wrapper'>
            <Image className='cover-image-wrapper' src={coverImg} />
            <h1>Compartilhe suas receitas com o mundo.</h1>
        </div>
    )
}

export default Cover