import React from 'react';
import { connect } from 'react-redux';
import * as actions from './todoAppAction';

const Todo = ({onClick, text, completed, deleteTodo, toggleTodo, id, editTodo}) => {

    return (
        <div>
            <li
                onClick={() => toggleTodo(id)}
                style={{
                    textDecoration : completed ? 'line-through' : 'none',
                    display : 'inline-block'
                }}
            >{text}</li>
            <button style={{ display:'inline-block'}} onClick={() => deleteTodo(id)}>Delete</button>
            <button style={{ display:'inline-block'}} onClick={() => editTodo(id, text)}>Edit</button>
        </div>
    );
};

export default connect(null, actions)(Todo);