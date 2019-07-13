import React from 'react';
import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Root);
