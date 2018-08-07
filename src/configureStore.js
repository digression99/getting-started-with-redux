import todoAppReducer from "./todoAppReducer";
// import {createStore} from "./Redux";
import {applyMiddleware, createStore} from 'redux';

import promise from 'redux-promise';
import createLogger from 'redux-logger';
// import throttle from "lodash/throttle";
// import {loadState, saveState} from "./localStorage";

// const logger = store => {
//     return (next) => {
//         if(!console.group) return next;
//         return (action) => {
//             console.group(action.type);
//             console.log('%c prev state ', 'color : gray', store.getState());
//             console.log('%c action ', 'color:blue', action);
//             const returnValue = next(action);
//             console.log('%c next state ', 'color:green', store.getState());
//             console.groupEnd(action.type);
//             return returnValue;
//         }
//     }
// };
//
// const promise = (store) => (next) => (action) => {
//     if (typeof action.then === 'function') {
//         return action.then(next);
//     }
//     return next(action);
// };

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//     middlewares.slice().reverse().forEach(middleware => store.dispatch = middleware(store)(store.dispatch));
// }

const thunk = (store) => (next) => (action) =>
    typeof action === 'function' ? action(store.dispatch) :
    next(action);

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger);
    }
    console.log('middlewares : ', middlewares);

    return createStore(
        todoAppReducer,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
