import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
// import {toggleTodo, deleteTodo, receiveTodos} from './TodoAppAction';
import * as actions from './todoAppAction';
import { getVisibleTodos, getIsFetching, getErrorMessage } from "./todoAppReducer";
// import { fetchTodos} from "./api";
import TodoList from './TodoList';
import FetchError from './FetchError';

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
        const { toggleTodo, todos, isFetching, errorMessage, deleteTodo } = this.props;
        // if (isFetching) return <p>Loading...</p>
        if (isFetching && !todos.length) {
            return <p>Loading...</p>
        }

        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            )
        }
        // presentational.
        return <TodoList
            todos={todos}
            onTodoClick={toggleTodo}
            onDeleteButtonClick={deleteTodo}
        />;
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || 'all';
    return {
        todos : getVisibleTodos(state, filter),
        isFetching : getIsFetching(state, filter),
        errorMessage : getErrorMessage(state, filter),
        filter
    }
};

VisibleTodoList = withRouter(connect(mapStateToProps, actions)(VisibleTodoList));
export default VisibleTodoList;