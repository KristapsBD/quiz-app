import React, {useState} from 'react'
import Button from './Button';

const Buttons = (props) => {

    return (
        props.answers.map(answer => {
            return <Button key={answer} answer={answer}/>
        })
    )
}

export default Buttons