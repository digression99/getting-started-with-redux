
import { normalize } from 'normalizr';
// import uuidv4 from 'uuid/v4';
import * as api from './api';
import { getIsFetching } from "./todoAppReducer";
import * as schema from './schema';


export const deleteTodo = id => ({ type : 'DELETE_TODO', id});

export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        console.log('normalized response', normalize(response, schema.todo));
        dispatch({
            type : 'ADD_TODO_SUCCESS',
            response : normalize(response, schema.todo)
        })
    });

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type : 'FETCH_TODOS_REQUEST',
        filter
    });

    return api.fetchTodos(filter).then(
        response => {
            console.log('normalized response', normalize(response, schema.arrayOfTodos));
            dispatch({
                type : 'FETCH_TODOS_SUCCESS',
                filter,
                response : normalize(response, schema.arrayOfTodos)
            });
            }, error => {
                dispatch({
                    type : 'FETCH_TODOS_FAILURE',
                    filter,
                    message : error.message || 'Something went wrong.'
                })
        });
};

export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        dispatch({
            type : 'TOGGLE_TODO_SUCCESS',
            response : normalize(response, schema.todo)
        })
    });