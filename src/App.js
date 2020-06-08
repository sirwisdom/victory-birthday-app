import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Music from "./components/Music";
import { wishes } from "./wishes";

function App() {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === wishes.length - 1) setindex(0);
      else setindex(index + 1);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="App">
      <div className="app-body">
        <h3>Happy Birthday</h3>

        <h3 className="name">Enevwerojo Victory</h3>
        <br />
        <p>{wishes[index].wish}</p>
      </div>
      <br />
      <Music />
    </div>
  );
}

export default App;
