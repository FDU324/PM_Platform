import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import configureStore from 'app//store/configureStore'
import {Provider} from 'react-redux';

import Home from 'app/container/HomeTab'

const store = configureStore();

class Testing extends React.Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}


export default class App extends React.Component {
    render() {
        const pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>Hello</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Testing name='dsaafasfdaf'/>
        </View>
        );
    }
}

// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <Home />
//             </Provider>
//         )
//     }
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
