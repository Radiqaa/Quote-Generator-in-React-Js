import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios.get("http://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.error("Error fetching the quote: ", error);
      });
  }, []);

  let fetchNewQuote = () => {
    axios.get("http://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.error("Error fetching the new quote: ", error);
      });
  }

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Random Quote Generator</h1>
      </nav>

      <div className="quote-box">
        <h2>{quote}</h2>
        <small>"{author}"</small>
      </div>

      <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default App;
