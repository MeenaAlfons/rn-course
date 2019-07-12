// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>This is my header</Text>
        </View>
    );
};

// Styles
const styles = {
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        // flexDirection: 'column', // This is the default
        flexDirection: 'row',
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#333333'
    }
}
// Make component available to other parts of the app
export default Header;