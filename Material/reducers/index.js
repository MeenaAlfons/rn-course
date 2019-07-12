const defaultState = {
    todos: [
        { id:1, text: "This is me"},
        { id:2, text: "Not you"}
    ]
};

export default (state = defaultState, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.text
                    }
                ]
            }
        default:
            return state;
    }
}