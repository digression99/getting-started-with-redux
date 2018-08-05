import todoAppReducer from "./todoAppReducer";
import {createStore} from "./Redux";
import throttle from "lodash/throttle";
// import {loadState, saveState} from "./localStorage";

const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch;
    if(!console.group) return rawDispatch;

    return (action) => {
        console.group(action.type);
        console.log('%c prev state ', 'color : gray', store.getState());
        console.log('%c action ', 'color:blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state ', 'color:green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
};

const configureStore = () => {
    // const persistedState = loadState();
    // const store = createStore(todoAppReducer, persistedState);
    const store = createStore(todoAppReducer);

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos : store.getState().todos
    //     });
    // }, 1000));
    return store;
};

export default configureStore;
