import './App.css';
import blobYellow from './images/yellowblob.png'
import blobBlue from './images/blueblob.png'

function App() {
  return (
    <div className='app'>
      <div className="start">
        <h1 className='heading'>Quizzical</h1>
        <p className='paragraph'>Play and improve your trivia skills</p>
        <button>Start Quiz</button>
        <img className='top-right' src={blobYellow} />
        <img className='bottom-left' src={blobBlue} />
      </div>
    </div>

  );
}

export default App;
