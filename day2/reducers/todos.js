export default (state = [], action) => {
    switch(action.type){
    case "ADD_TODO":
        return [
            ...state,
            { id: state.length+1, text: action.text}
        ];
    default:
        return state;
    }
}
