import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <View>
                <Button title="Add Todo" onPress={() => {
                    this.props.addTodo();
                }}/>

                {this.props.todos.map(todo => {
                    return (
                        <Todo key={todo.id} todo={todo}/>
                    )
                })}
            </View>
        );
    }
}

export default TodoList;