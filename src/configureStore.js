import todoAppReducer from "./todoAppReducer";
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// const thunk = (store) => (next) => (action) =>
//     typeof action === 'function' ? action(store.dispatch, store.getState) :
//     next(action);

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
