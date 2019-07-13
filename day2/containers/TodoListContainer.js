import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import { ADD_TODO, selectTodo } from '../actions';

const mapStateToProps = state => {
    return {
        todos: state.todos,
        selectedTodo: state.selectedTodo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: () => {
            dispatch(ADD_TODO);
        },
        selectTodo: (id) => {
            dispatch(selectTodo(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);