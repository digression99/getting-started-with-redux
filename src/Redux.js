
// redux functions.
export const createStore = (reducer, initialState) => {
    let state = initialState ? initialState : {};
    let listeners = [];

    const getState = () => state;
    const dispatch = action => {
        console.log('in dispatch, state :');
        console.log(state);
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

    dispatch(state); // initial state.

    return { getState, dispatch, subscribe };
};

export const combineReducers = (reducers => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    }
});