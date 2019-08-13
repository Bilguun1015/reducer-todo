export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Do my project',
            completed: false,
            id: 34523452345
        }
    ],
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            const newTodo ={
                id: Date.now(),
                item: action.item,
                completed: false
            };
            return {
                todos: [...state.todos, newTodo]
            };
        case 'REMOVE':
            const idx = state.todos.findIndex(item => item.id === action.id);
            const todo = Object.assign([], state.todos);
            todo.splice(idx, 1);
            return{
                todos: todo
            };
        case 'COMPLETE':
            return {
                ...state.todos,
                completed: !state.completed
            }
        default:
            return state;
    }
}