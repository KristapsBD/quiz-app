import './App.css';
import blobYellow from './images/yellowblob.png';
import blobBlue from './images/blueblob.png';
import { useState, useEffect } from 'react';
import Trivia from './components/Trivia'
import Data from './Data';

function App() {

  const [start, setStart] = useState(false);
  const [trivia, setTrivia] = useState(Data);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(response => response.json())
      .then(data => setTrivia(data));
  }, []);

  let i = 0;
  const triviaProperties = trivia.results.map(item => {
    return {
      ...item,
      selectedAnswer: null,
      questionId: i++
    }
  })

  function startGame() {
    return setStart(true);
  };

  function checkAnswers() {

  };

  return (
    <div className='app'>
      {start ?
        <div className='game'>
          <Trivia triviaProperties={triviaProperties} />
          <button className='button' id='check-answer' onClick={checkAnswers}>Check answers</button>
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
