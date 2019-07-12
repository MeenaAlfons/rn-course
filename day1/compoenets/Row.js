// Import libraries
import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make component
class Row extends Component {
 render() {
    console.log("render");
    return (
        <View>
            <Text style={styles.textStyle}>{this.props.title + this.props.Mohamed}</Text>
        </View>
    );
 }
//  componentDidMount() {
//     console.log("componentDidMount");
//  }
 

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        backgroundColor: 'blue'
    }
});


export default Row;