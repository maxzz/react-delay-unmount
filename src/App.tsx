import React, { useState } from "react";
import "./App.css";
import DelayedWithState from './components/DelayedWithState';
import DelayedWithHooks from './components/DelayedWithHooks';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
          <DelayedWithState />
          <DelayedWithHooks />
      </header>
    </div>
  );
}

export default App;
