import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { fetchTodos } from './api';

registerServiceWorker();

// fetchTodos('all').then(todos => {
//     console.log(todos);
// });

const store = configureStore();



ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'));