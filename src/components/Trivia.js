import React from 'react'

const Trivia = (props) => {

    const test = props.data.results[0]
    console.log(test)

    const questions = props.data.results.map(item => {

        const answers = [...item.incorrect_answers, item.correct_answer]

        console.log('answers '+answers)

        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }}></h1>
                <p key={item.incorrect_answers}>{item.incorrect_answers}</p>
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