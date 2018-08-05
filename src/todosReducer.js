
import {combineReducers} from "./Redux";
import todo from './todoReducer';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.id] : todo(state[action.id], action),
            };
        case 'DELETE_TODO':
            const {[action.id] : _, ...newState} = state;
            return newState;
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.id];
        case 'DELETE_TODO':
            return state.filter(id => id !== action.id);
        default :
            return state;
    }
};

const todos = combineReducers({
    byId,
    allIds
});

export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
    const allTodos = getAllTodos(state); // 컴포넌트 코드는 그대로 동작하게 할 수 있다.
    switch (filter) {
        case 'all':
            return allTodos;
        case 'completed':
            return allTodos.filter(t => t.completed);
        case 'active':
            return allTodos.filter(t => !t.completed);
        default :
            throw new Error(`unknown filter : ${filter}`);
    }
};