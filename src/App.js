import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
     
      </header>
    </div>
  );
}

export default App;
