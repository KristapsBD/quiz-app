import './App.css';
import blobYellow from './images/yellowblob.png';
import blobBlue from './images/blueblob.png';
import { useState, useEffect } from 'react';
import Trivia from './components/Trivia'
import Data from './Data';

/*
  TODO
    -fix api fetch undefined error (remove Data.js)
    -fix re render bug from randint in Button.js
    -clean up unused vars

*/


function App() {

  const [start, setStart] = useState(false);
  const [trivia, setTrivia] = useState(Data);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(response => response.json())
      .then(data => setTrivia(data));
  }, [start]);

  let i = 0;
  const triviaProperties = trivia.results.map(item => {
    return {
      ...item,
      selectedAnswer: null,
      questionId: i++
    }
  })

  function startGame() {
    setCorrectAnswerCount(0);
    setShowAnswers(false);
    return setStart(true);
  };

  function checkAnswers() {
    setShowAnswers(true);
    for (let i = 0; i < 5; i++) {
      if (triviaProperties[i].selectedAnswer === triviaProperties[i].correct_answer) {
        setCorrectAnswerCount(prev => prev + 1)
      }
    }
  };

  function reset(){
    setStart(false);
  };

  return (
    <div className='app'>
      {start ?
        <div className='game'>
          <Trivia triviaProperties={triviaProperties} showAnswers={showAnswers}/>
          {showAnswers && <div className='answer-count'>You got {correctAnswerCount} / 5 answers right!</div>}
          { showAnswers ? <button className='button' id='check-answer' onClick={reset}>Play again</button> : <button className='button' id='check-answer' onClick={checkAnswers}>Check answers</button>}
        </div>
        :
        (
          <div className="start">
            <h1 className='heading'>Quizzical</h1>
            <p className='paragraph'>Play and improve your trivia skills</p>
            <button className='button' onClick={startGame}>Start Quiz</button>
            <img className='top-right' src={blobYellow} alt='Yellow blob' />
            <img className='bottom-left' src={blobBlue} alt='Blue blob' />
          </div>
        )
      }
    </div>

  );
}

export default App;
