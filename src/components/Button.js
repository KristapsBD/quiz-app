import React from 'react'

const Button = (props) => {

    function handleClick(answer){
        props.triviaProperties[props.questionId].selectedAnswer = props.answer;
        props.onChange(answer);
    }

    let styles = '';
    console.log(props.active)
    console.log(props.answer)
    console.log(props.triviaProperties[props.questionId].correct_answer)
    console.log(props.triviaProperties)
    
    if (props.active === props.answer && props.active !== props.triviaProperties[props.questionId].correct_answer){
        styles = 'incorrect'
    } else if (props.active !== props.answer && props.answer !== props.triviaProperties[props.questionId].correct_answer ){
        styles = 'other'
    }

    if (props.showAnswers){
        return (
            <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} className={`option ${styles} ${ props.answer === props.triviaProperties[props.questionId].correct_answer ? 'correct' : ''}`}></button>
        )
    } else {
        return (
            <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} onClick={() => handleClick(props.answer)} className={`option ${props.active === props.answer ? 'clicked' : ''}`}></button>
        )
    }
}

export default Button