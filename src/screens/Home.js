/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class Home extends Component<{}> {
    static navigationOptions = {
        header: null,
        tabBarLabel: 'Splash',
    };
    constructor() {
        super()
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        this.state = {
        }
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});