import './App.css';
import React from 'react';
import Calculator from './containers/Calculator';

function App() {
  return (
    <div className="App" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
      <div className="container calculator" style={{width: 400, height: "100vh", paddingTop: 200}}id="calculator">
          <h1>ReactJs Calculator</h1>
          <Calculator />
      </div>
    </div>
  )}

export default App;
