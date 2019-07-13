import { combineReducers } from "redux";
import todos from './todos';
import selectedTodo from './selectedTodo';

export default combineReducers({
    todos,
    selectedTodo
})