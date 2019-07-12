// Import libraries
import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make component
class Page1 extends Component {
 render() {
    return (
        <View>
            <Text style={styles.textStyle}>Page 1</Text>
        </View>
    );
 }
 

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        backgroundColor: 'blue'
    }
});


export default Page1;