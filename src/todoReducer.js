

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.text === "")
                return state;
            return {
                id : action.id,
                text : action.text,
                completed : false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) return state;
            return {
                ...state,
                completed : !state.completed
            };
        // case 'DELETE_TODO':
        //     return null;
        default:
            return state;
    }
};