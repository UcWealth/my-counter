import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={add} className="add">Increase</button>&nbsp;
      <button onClick={minus} className="minus">Reduce</button>
    </div>
  );
}

export default App;
