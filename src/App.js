import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('/data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      {
        <p>{data.about}</p>
      }
      <header className="App-header">

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
