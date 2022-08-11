import logo from './logo.svg';
import './App.css';
this.state ={
  adviceWhat: null
}
function App() {
  function fetchAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => this.setState({adviceWhat:data.advice}))
  }
  const {adviceWhat} = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
