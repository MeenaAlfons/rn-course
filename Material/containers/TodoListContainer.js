import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import { ADD_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: () => {
            dispatch(ADD_TODO);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);