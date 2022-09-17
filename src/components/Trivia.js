import React from 'react'
import Buttons from './Buttons';

const Trivia = (props) => {

    const test = props.data.results
    console.log(test)

    const questions = props.data.results.map(item => {

        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }} className='question-heading'></h1>
                <Buttons item={item} />
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