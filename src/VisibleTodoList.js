import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
// import {toggleTodo, deleteTodo, receiveTodos} from './TodoAppAction';
import * as actions from './TodoAppAction';
import { getVisibleTodos } from "./todoAppReducer";
// import { fetchTodos} from "./api";
import TodoList from './TodoList';

class VisibleTodoList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, ...rest } = this.props;
        // presentational.
        return <TodoList
            {...rest}
            onTodoClick={toggleTodo}
        />;
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        todos : getVisibleTodos(state, filter),
        filter
    }
};
VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));
export default VisibleTodoList;