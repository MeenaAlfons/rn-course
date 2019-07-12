import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent('Material', () => Root);
