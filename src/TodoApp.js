
import React from 'react';
import {connect} from "react-redux";
import {addTodo} from './todoAppAction';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

const TodoApp = ({ onEnterKeyDown }) => {
    console.log('in todo app.');
    console.log(this.props);

    document.addEventListener('keydown', e => {
        const key = e.key;
        if (key === 'Enter') {
            const input = document.querySelector('input');
            onEnterKeyDown(input.value);
            input.value = "";
        }
    });

    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default connect(null, { onEnterKeyDown : addTodo })(TodoApp);