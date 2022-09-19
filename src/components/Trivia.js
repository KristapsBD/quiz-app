import React from 'react'
import Buttons from './Buttons';

const Trivia = (props) => {

    const test = props.triviaProperties
    console.log(test)

    const questions = props.triviaProperties.map(item => {

        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }} className='question-heading'></h1>
                <Buttons item={item} triviaProperties={props.triviaProperties} questionId={item.questionId} showAnswers={props.showAnswers}/>
                <div className='bottom-border'></div>
            </div>
        )
    })

    return (
        <div className='trivia'>
            {questions}
        </div>
    )
}

export default Trivia