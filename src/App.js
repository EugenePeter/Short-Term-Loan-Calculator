import React from 'react';
import './App.css';
import Calculator from './components/calculator/calculator.component';

import Navigation from './components/navigation/navigation.component';

import 'normalize.css';

function App() {
  return (
    <div className="App-header">
        <Navigation />
        <Calculator className="Calculator" />
    </div>
  );
}

export default App;
