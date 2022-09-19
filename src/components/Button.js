import React, {useState} from 'react'

const Button = (props) => {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        props.triviaProperties[props.questionId].selectedAnswer = props.answer;
        console.log(props.triviaProperties[props.questionId])
        setClicked(prev => {
            return !prev;
        })
    }

    return (
        <button dangerouslySetInnerHTML={{ __html: props.answer }} key={props.answer} onClick={handleClick} className={`option ${clicked ? 'clicked' : ''}`}></button>
    )
}

export default Button