import {combineReducers} from "./Redux";
import todos, * as fromTodos from './todosReducer';

export default combineReducers({
    todos
});

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);