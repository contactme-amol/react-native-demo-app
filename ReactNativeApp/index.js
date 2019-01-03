/** @format */
import React from 'react';
import {AppRegistry, View} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style = {{flex: 1}}>
        <Header headerText={'React Native App'}/>
        <AlbumList />
    </View>
);
AppRegistry.registerComponent(appName, () => App);