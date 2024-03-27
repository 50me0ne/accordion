import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'

function App() {
  return (
    <div className="App">
      {/*Accordion component */}
      {/*<Accordian/>*/}
      {/*Random-Color component */}
      {/*<RandomColor/>*/}
      {/*Star rating component */}
      <StarRating noOfStars={10}/>
      {/*<header className="App-header">
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
      </header>*/}
    </div>
  );
}

export default App;
