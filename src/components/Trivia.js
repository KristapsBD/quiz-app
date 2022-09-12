import React from 'react'

const Trivia = (props) => {

    const test = props.data.results[0]
    console.log(test)

    const questions = props.data.results.map(item => {

        const answers = [...item.incorrect_answers, item.correct_answer]

        console.log(answers)

        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }} className='question-heading'></h1>
                <button key={item.incorrect_answers} dangerouslySetInnerHTML={{ __html: answers }} className='option'></button>
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