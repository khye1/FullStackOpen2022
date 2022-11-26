import logo from './logo.svg';
import './App.css';

function App() {
  console.log("hello from component");

  const now = new Date();
  const a = 10
  const b = 20

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
        <div>
          <p>Hello World</p>
        </div>
      </header>
    </div>
  );
}

export default App;
