import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import configureStore from './app/store/configStore';
import { Provider } from 'react-redux';

import MyApp from './app/containers/HomeTab';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MyApp />
            </Provider>
        )
    }
}

