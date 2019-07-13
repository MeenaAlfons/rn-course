import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Todo from './Todo';
import {ADD_TODO, selectTodo} from '../actions';

class TodoList extends Component {
  render() {
    const {
        todos,
        selectedTodo,
        addTodo,
        selectTodo
    } = this.props;

    return (
        <View>
            <Text>My Todo List</Text>
            <Button title="Add Todo" onPress={() => {
                addTodo();
            }}/>
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        selected={todo.id == selectedTodo}
                        onPress={(id) => {
                            selectTodo(id);
                        }}
                        />
                );
            })}
        </View>
    );
  }
}

export default TodoList;
