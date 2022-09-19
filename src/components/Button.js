import React from 'react'

const Button = (props) => {

    function handleClick(answer){
        props.triviaProperties[props.questionId].selectedAnswer = props.answer;
        props.onChange(answer);
    }

    let styles = '';
    if (props.active === props.answer && props.active === props.triviaProperties[props.questionId].correct_answer){
        styles = 'correct'
    } else if (props.active !== props.answer){
        styles = 'other'
    } else {
        styles = 'incorrect'
    }

    if (props.showAnswers){
        return (
            <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} className={`option ${styles}`}></button>
        )
    } else {
        return (
            <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} onClick={() => handleClick(props.answer)} className={`option ${props.active === props.answer ? 'clicked' : ''}`}></button>
        )
    }
}

export default Button