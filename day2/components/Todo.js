import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Todo extends Component {
  render() {
      const { todo, selected, onPress } = this.props;
    return (
        <TouchableOpacity style={{
            borderWidth: 3,
            borderColor: selected ? 'red' : 'blue'
            }}
            onPress={() => {
                onPress(todo.id);
            }}>
            <Text>{todo.id}</Text>
            <Text>{todo.text}</Text>
        </TouchableOpacity>
    );
  }
}

export default Todo;
