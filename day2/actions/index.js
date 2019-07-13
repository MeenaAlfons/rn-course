export const ADD_TODO = {
    type: "ADD_TODO",
    text: "Another Todo"
}

export const selectTodo = (id) => {
    return {
        type: "SELECT_TODO",
        id: id
    };
}