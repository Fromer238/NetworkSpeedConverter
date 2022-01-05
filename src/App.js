import React, { useState } from 'react';
import CardFooter from './CardFooter';
import './style.css';

const App = () => {
  const [input, setInput] = useState(0)
  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const convertInput = input / 8
    return (
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <div className="unit-control">
            <div className="unit">Mbps</div>
            <span className="exchange-icon fa-fw fa-stack">
              <i className="far fa-circle fa-stack-2x" ></i>
              <i className="fas fa-exchange-alt fa-stack-1x" ></i>
            </span>
            <div className="unit">MB/s</div>
          </div>
          <div className="converter">
            <div className="flex-1">
              <div className="converter-title">Set</div>
              <input type="number" className="input-number" min="0" value={input} onChange={inputHandler} />
            </div>
            <span className="angle-icon fa-2x">
              <i className="fas fa-angle-right" ></i>
            </span>
            <div className="text-right flex-1">
              <div className="converter-title">Show</div>
              <input type="text" className="input-number text-right" disabled value={convertInput} />
            </div>
          </div>
        </div>
        <CardFooter input={input}/>
      </div>
    );
}

export default App;
