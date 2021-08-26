import React, { useReducer } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}
let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
});

/*// volver a ejecutarlas.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1*/
function AppRedux() {
    //const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <header className="App-header">
           

                Count: {store.getState()}
                <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
                <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
                <button onClick={() => store.dispatch({ type: 'RESET' })}>Reset</button>
            </header>
        </div>
    );
}

export default AppRedux;

