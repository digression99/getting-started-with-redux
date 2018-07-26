import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// redux test.

const counter = (state = 0, action) => {
    if (typeof state === 'undefined') return 0; // return initial state.
    if (action.type === 'INCREMENT') return state + 1;
    else if (action.type === 'DECREMENT') return state - 1;
    else return state;
};

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
            //return function that can unsubscribe.
        }
    };

    dispatch({}); // initial state.

    return { getState, dispatch, subscribe };
};

const store = createStore(counter);
console.log(store.getState());

store.dispatch({type : 'INCREMENT'});

console.log(store.getState());

const button = document.querySelector('button');
const h1 = document.querySelector('h1.redux-test-content');

const render = () => {
    h1.innerText = store.getState();
};

store.subscribe(render);
render(); // initial rendering.

button.addEventListener('click', () => {
    store.dispatch({type : 'INCREMENT'});
});

const Counter = ({
                     value,
                     onIncrement,
                     onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);







ReactDOM.render(<Counter value={store.getState()}
                         onIncrement={() => {
                             store.dispatch({type : 'INCREMENT'})
                         }}
                         onDecrement={() => {
                             store.dispatch({type : 'DECREMENT'})
                         }}
/>, document.getElementById('redux-test'));
