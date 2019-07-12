// Import libraries
import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make component
class Home extends Component {
 render() {
    return (
        <View>
            <Text style={styles.textStyle}>HOME</Text>
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


export default Home;