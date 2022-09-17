import React from 'react'
import Buttons from './Buttons';

const Trivia = (props) => {

    const test = props.data.results[0]
    console.log(test)
        
    const questions = props.data.results.map(item => {

        let answers = [...item.incorrect_answers];
        const randIndex = Math.floor(Math.random() * answers.length);
        answers.splice(randIndex, 0, item.correct_answer);


        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }} className='question-heading'></h1>
                <Buttons answers={answers}/>
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