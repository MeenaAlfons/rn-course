import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Todo extends Component {
    render() {
        const {todo} = this.props;
        return (
            <View style={{borderWidth: 3}}>
                <Text>{todo.id}</Text>
                <Text>{todo.text}</Text>
            </View>
        );
    }
}

export default Todo;