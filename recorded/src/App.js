import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="App">
   <ReactPlayer width="1920px"  height="960px" controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc" onReady= {() => console.log("onReady callback")} />
   <a href="https://codesandbox.io/s/happy-phoebe-yv8cmf?file=/src/App.js" target="_blank"> Assignment 1</a>
    </div>
  );
}

export default App;
