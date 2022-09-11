import React from 'react'

const Trivia = (props) => {

    const questions = props.data.results.map(item =>{
        return (
            <div key={item.question} className='question'>
                <h1 dangerouslySetInnerHTML={{__html: item.question }}></h1>
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