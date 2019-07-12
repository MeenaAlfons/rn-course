// Import libraries
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make component
const Header = () => {
    return (
        <View>
            <Text style={styles.textStyle}>My Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        backgroundColor: 'blue'
    }
});


export default Header;