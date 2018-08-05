
import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "./TodoAppAction";

const AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {input = node;}}/>
            <button onClick={() => {
                console.log('in add todo, value : ', input.value);
                if (input.value === "") return;
                dispatch(addTodo(input.value));

                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};

export default connect()(AddTodo);