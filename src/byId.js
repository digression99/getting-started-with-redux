
const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            const nextState = { ...state };
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case 'DELETE_TODO':
            const {[action.id] : _, ...newState} = state;
            return newState;
        default:
            return state;
    }
};

export default byId;

export const getTodo = (state, id) => state[id];
