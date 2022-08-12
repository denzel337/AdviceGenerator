import React, {useState} from 'react';
import Advice from './components/Advice';
import './App.css';

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
  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <button onClick={fetchAdvice}> Click</button>
    
        </p>
         <div>
        <Advice  advice = {advice}
        id ={adviceNumber}/>
      </div>
      </header>
    
    </div>
  );
}

export default App;
