import React, {useState} from 'react'

const Button = (props) => {

    function handleClick(answer){
        props.triviaProperties[props.questionId].selectedAnswer = props.answer;
        console.log(props.triviaProperties[props.questionId])
        props.onChange(answer);
    }

    return (
        <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} onClick={() => handleClick(props.answer)} className={`option ${props.active === props.answer ? 'clicked' : ''}`}></button>
    )
}

export default Button