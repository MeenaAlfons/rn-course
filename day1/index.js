// Import libraries
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Home from './compoenets/Home';
import Page1 from './compoenets/Page1';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator(
    {
      Home: Home,
      Page1: Page1
    },
    {
      initialRouteName: "Home"
    }
  );

const AppContainer = createAppContainer(AppNavigator);

// Make component
const App = () => {
    return (
        <AppContainer/>
    );
};


// Register component
AppRegistry.registerComponent("day1", () => App);
