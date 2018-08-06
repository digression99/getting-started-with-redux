import React from 'react';

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

export default TodoList;
