import React from 'react'
import Button from './Button';

const Buttons = (props) => {

    let answers = [...props.item.incorrect_answers];
    const randIndex = Math.floor(Math.random() * answers.length);
    console.log(randIndex)
    answers.splice(randIndex, 0, props.item.correct_answer);

    return (
        answers.map(answer => {
            return <Button key={answer} answer={answer} correctIndex={randIndex}/>
        })
    )
}

export default Buttons