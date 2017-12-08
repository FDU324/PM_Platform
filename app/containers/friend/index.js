import React from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    View,
    Image,
} from 'react-native';

export default class FriendTab extends React.Component {
    render() {
        const pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Text>Friend</Text>
                <Image source={pic} style={{ width: 193, height: 110 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});