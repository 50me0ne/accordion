import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';

function App() {
  return (
    <div className="App">
      {/*Accordion component */}
      {/*<Accordian/>*/}
      {/*Random-Color component */}
      {/*<RandomColor/>*/}
      {/*Star rating component */}
      {/*<StarRating noOfStars={10}/>*/}
      {/*Star rating component */}
      {/*Image slider component */}
      {/*<ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>*/}
      {/*Load More Products component */}
      {/*<LoadMoreData/> */}
      {/*Tree view component */}
      {/*<TreeView menus={menus}/>*/}
      {/*QR Code Generator component */}
      {/*<QRCodeGenerator/>*/}
      {/*Light and Dark mode component */}
      <LightDarkMode/>
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
