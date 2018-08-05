import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {toggleTodo, deleteTodo} from './TodoAppAction';
import { getVisibleTodos } from "./todoAppReducer";
import { fetchTodos} from "./api";

class VisibleTodoList extends Component {

    componentDidMount() {
        fetchTodos(this.props.filter).then(todos => {
            console.log(this.props.filter, todos);
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos => {
                console.log(this.props.filter, todos);
            })
        }
    }

    render() {
        // presentational.
        return <TodoList {...this.props} />;
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        todos : getVisibleTodos(state, filter),
        filter
    }
};

const Todo = ({onClick, text, completed, onButtonClick}) => (
    <div>
        <li
            onClick={onClick}
            style={{
                textDecoration : completed ? 'line-through' : 'none',
                display : 'inline-block'
            }}
        >{text}</li>
        <button style={{ display:'inline-block'}} onClick={onButtonClick}>Delete</button>
    </div>
);

const TodoList = ({ todos, onTodoClick, onButtonClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onButtonClick={() => onButtonClick(todo.id)}
            />
        )}
    </ul>
);

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick : toggleTodo, onButtonClick : deleteTodo})(VisibleTodoList));
export default VisibleTodoList;