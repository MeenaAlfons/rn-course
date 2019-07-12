// Import libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './components/header.done';

// Create Component
const App = () => {
    return (
        <Header></Header>
    );
}

// Render it to device
AppRegistry.registerComponent('Material', () => App);
