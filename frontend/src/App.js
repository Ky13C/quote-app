import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/quote');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <div className="quote-box">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;