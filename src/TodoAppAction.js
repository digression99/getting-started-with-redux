
// td app.
// action creators.
// let nextTodoId = parseInt(Math.random() * 10000000);

import uuidv4 from 'uuid/v4';

export const addTodo = text => ({ type: 'ADD_TODO', id: uuidv4(), text});
// export const setVisibilityFilter = filter => ({ type : 'SET_VISIBILITY_FILTER', filter });
export const toggleTodo = id => ({ type : 'TOGGLE_TODO', id });
export const deleteTodo = id => ({ type : 'DELETE_TODO', id});
// action creators end.