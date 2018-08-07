import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
// import {toggleTodo, deleteTodo, receiveTodos} from './TodoAppAction';
import * as actions from './todoAppAction';
import { getVisibleTodos, getIsFetching } from "./todoAppReducer";
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
        // requestTodos(filter);
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props;
        // if (isFetching) return <p>Loading...</p>
        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }
        // presentational.
        return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
        />;
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        todos : getVisibleTodos(state, filter),
        isFetching : getIsFetching(state, filter),
        filter
    }
};

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));
export default VisibleTodoList;