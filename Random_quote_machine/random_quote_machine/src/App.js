import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          {/* Name of the web*/}
          <h1 id="name-of-app">RANDOM QUOTE MACHINE</h1>
        
        
      </header>

      <div id="wrapper">

        <div id = "quote-box">

          <div class="quote-text">
            <p id = "text">test</p>
          </div>

          <div class="quote-author">
           <p id = "author">test</p>
          </div>

          <div class="button">
            <a href='' id="tweet-quote">tweet</a>
            <button id="new-quote">button</button>
          </div>

        </div>

        <div class="footer">
          <p>by Sang Nguyen</p>
          
        </div>

      </div>
        
      
    </div>
  );
}

export default App;
