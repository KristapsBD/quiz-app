import React from 'react'

const Trivia = (props) => {

    const test = props.data.results[0]
    console.log(test)

    function handleClick(){
        console.log('click')
    }
        
    const questions = props.data.results.map(item => {

        let answers = [...item.incorrect_answers];
        const randIndex = Math.floor(Math.random() * answers.length);
        answers.splice(randIndex, 0, item.correct_answer);
        console.log(answers)


        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{ __html: item.question }} className='question-heading'></h1>
                {console.log(item)}
                {
                    answers.map(answer => {
                        return <button dangerouslySetInnerHTML={{ __html: answer }} key={answer} onClick={handleClick} className='option'></button>
                    })
                }
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