import React from 'react';
import './App.css';
import Calculator from './components/calculator/calculator.component';
import 'normalize.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator className="Calculator" />
      </header>
    </div>
  );
}

export default App;
