
const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        };
    }
    return state;


    // switch (action.type) {
    //     // case 'RECEIVE_TODOS':
    //     case 'FETCH_TODOS_SUCCESS':
    //         const nextState = { ...state };
    //         action.response.forEach(todo => {
    //             nextState[todo.id] = todo;
    //         });
    //         return nextState;
    //     case 'DELETE_TODO':
    //         const {[action.id] : _, ...newState} = state;
    //         return newState;
    //     case 'ADD_TODO_SUCCESS':
    //         return {
    //             ...state,
    //             [action.response.id] : action.response
    //         };
    //     default:
    //         return state;
    // }
};

export default byId;

export const getTodo = (state, id) => state[id];
