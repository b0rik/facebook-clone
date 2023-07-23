import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState('no data yet');

  useEffect(() => {
    callAPI();
  }, []);
  
  const url = 'http://localhost:9000/testAPI';

  const callAPI = async () => {
    try {
      const fetchData = await fetch(url);
      const parsedData = await fetchData.text();
      console.log('HERE!', '\n', parsedData);
      setData(parsedData);
    } catch (err) {
      console.log('ERROR!', '\n', err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            {data}
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
