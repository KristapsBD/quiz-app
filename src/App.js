import './App.css';
import blobYellow from './images/yellowblob.png';
import blobBlue from './images/blueblob.png';
import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false);

  function startGame() {
    return setStart(true);
  }

  return (
    <div className='app'>
      <div className="start">
        <h1 className='heading'>Quizzical</h1>
        <p className='paragraph'>Play and improve your trivia skills</p>
        <button className='button' onClick={startGame}>Start Quiz</button>
        <img className='top-right' src={blobYellow} alt='Yellow blob' />
        <img className='bottom-left'  src={blobBlue} alt='Blue blob' />
      </div>
    </div>

  );
}

export default App;
