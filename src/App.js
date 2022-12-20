import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Home />
      <div id="backSquare"></div>
      <div id="frontSquare"></div>
    </div>
  );
}

export default App;
