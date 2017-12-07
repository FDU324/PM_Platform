/**
 * Created by kevintestt on 2017/11/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    View,
} from 'react-native';

import GameList from '../container/gameList';

class Home extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'gameList', component: GameList}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        )
    }
}
export default Home;