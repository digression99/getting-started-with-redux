import React from 'react';

import Todo from './Todo';

// const Todo = ({onClick, text, completed, onDeleteButtonClick, onEditButtonClick}) => (
//     <div>
//         <li
//             onClick={onClick}
//             style={{
//                 textDecoration : completed ? 'line-through' : 'none',
//                 display : 'inline-block'
//             }}
//         >{text}</li>
//         <button style={{ display:'inline-block'}} onClick={onDeleteButtonClick}>Delete</button>
//         <button style={{ display:'inline-block'}} onClick={onEditButtonClick}>Edit</button>
//     </div>
// );

const TodoList = ({ todos, onTodoClick, onDeleteButtonClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onDeleteButtonClick={() => onDeleteButtonClick(todo.id)}
                // onEditButtonClick={() => onEditButtonClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;
