import React, { useState } from 'react'
import Button from './Button';

const Buttons = (props) => {

    const [active, setActive] = useState(false);

    function activeButton(value){
        setActive(value)
     }

    let answers = [...props.item.incorrect_answers];
    const randIndex = Math.floor(Math.random() * answers.length);
    console.log(randIndex)
    answers.splice(randIndex, 0, props.item.correct_answer);

    return (
        answers.map(answer => {
            return <Button key={answer} onChange={activeButton} active={active} answer={answer} correctIndex={randIndex} triviaProperties={props.triviaProperties} questionId={props.questionId} />
        })
    )
}

export default Buttons