// Import libraries
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './compoenets/Header';
import Albums from './compoenets/Albums';

// Make component
const App = () => {
    return (
      <View>
        <Header/>
        <Albums/>
      </View>
    );
};

// Register component
AppRegistry.registerComponent("day1", () => App);
