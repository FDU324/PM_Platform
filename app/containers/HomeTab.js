/**
 * Created by kevintestt on 2017/11/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import GameTab from './game/index';
import FriendTab from './friend/index';

import AccountTab from './account/index';
import ShopTab from './shop/index';
import MomentTab from './moment/index';

const MyApp = TabNavigator({
    Game: {
        screen: GameTab,
    },
    Friend: {
        screen: FriendTab,
    },
    Shop: {
        screen: ShopTab,
    },
    Moment: {
        screen: MomentTab,
    },
    Account: {
        screen: AccountTab,
    }
});

export default MyApp;

