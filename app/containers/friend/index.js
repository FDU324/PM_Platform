import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';


const latestMessages = [
    {
        id: 's123123',
        name: 'kaka',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        latestMessage: "hello world",
    }, {
        id: 'j12312313',
        name: 'yu',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        latestMessage: "second life",
    }
];


export default class FriendTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: latestMessages,
        };
    }

    renderItem({ item }) {
        return (
            <ListItem
                roundAvatar
                key={item.id}
                title={item.name}
                subtitle={item.latestMessage}
                avatar={{ uri: item.avatar_url }}
            />
        );
    }

    render() {
        return (
            <List>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
            </List>
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