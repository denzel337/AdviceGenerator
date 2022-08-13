import React, {useState} from 'react';
import Advice from './components/Advice';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap');
</style>

function App() {
  const [advice, setAdvice] = useState([]);
  const [adviceNumber, setAdviceNumber] = useState([]);
  
  function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => { 
      return response.json();
    })
    .then((adviceData) => {
      setAdvice(adviceData.slip.advice);
      setAdviceNumber(adviceData.slip.id);
      });
      
      console.log(advice);
     
   
  }
  const element = <FontAwesomeIcon icon={faDiceFive} />

  return (
    <div className="App">
      <header className="App-header">
         <div className='adviceBox'>
        <Advice  advice = {advice}
        id ={adviceNumber}/>
        <div className='lineText'>
        <hr  /> '' <hr />
        </div>
        <button className='adviceButton' onClick={fetchAdvice}> {element} </button>
      </div>
      </header>
    
    </div>
  );
}

export default App;