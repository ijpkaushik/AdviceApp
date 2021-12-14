import './App.css';
import axios from 'axios'
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  function fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      }).catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="App">
      <div className="card">
        <h2 className="App-header">
          {advice}
        </h2>

        <button className="button" type="button" onClick={fetchAdvice}>
          <span>
            GIVE ME ADVICE!
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
