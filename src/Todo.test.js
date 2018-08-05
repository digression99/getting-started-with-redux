

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type :'ADD_TODO',
        id : 0,
        text : 'learn redux'
    };

    const stateAfter = [
        {
            id : 0,
            text : 'learn redux',
            completed : false
        }
    ];

    // deepFreeze(stateBefore);
    // deepFreeze(action);
    // expect(
    //     todos(stateBefore, action)
    // ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        { id : 0, text : 'learn redux', completed : false },
        { id : 1, text : 'go shopping', completed : false }
    ];
    const stateAfter = [
        { id : 0, text : 'learn redux', completed : false },
        { id : 1, text : 'go shopping', completed : true }
    ];

    // deepFreeze(stateBefore);
    // deepFreeze(action);
    // expect(todos(stateBefore, action)).toEqual(stateAfter);
};