
import uuidv4 from 'uuid/v4';
import * as api from './api';

export const addTodo = text => ({ type: 'ADD_TODO', id: uuidv4(), text});
// export const setVisibilityFilter = filter => ({ type : 'SET_VISIBILITY_FILTER', filter });
export const toggleTodo = id => ({ type : 'TOGGLE_TODO', id });
export const deleteTodo = id => ({ type : 'DELETE_TODO', id});
// action creators end.

const requestTodos = (filter) => ({
    type : 'REQUEST_TODOS',
    filter
});

const receiveTodos = (filter, response) => ({
    type : 'RECEIVE_TODOS',
    filter,
    response
});

export const fetchTodos = (filter) => (dispatch) => {
    dispatch(requestTodos(filter));

    api.fetchTodos(filter).then(response => {
        dispatch(receiveTodos(filter, response));
    });
};