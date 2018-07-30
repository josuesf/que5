import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View, Image, Dimensions, TouchableOpacity, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {getStyleFromProps, getPlatformValue} from '../../utils';

const window = Dimensions.get('window');

export default class BackgroundWrapper extends Component {
    renderChildren() {
        let childrens = [];
       
        childrens.push(this.props.children);
        return childrens;
    } 

    renderViewBackground() {
        const style = [
            styleWrapper.containerView
        ]
        return <View style={style}>
            {this.renderChildren()}
        </View>
    }

    render() {
        return this.renderViewBackground();
    }
}

BackgroundWrapper.propTypes = {
    iconLeft: PropTypes.string,
    onPressIcon: PropTypes.func,
    paddingTop: PropTypes.number
}

const styleWrapper = {
    containerImage: {
        width: window.width,
        height: window.height,
        backgroundColor: '#7e5682',
        resizeMode: getPlatformValue('android', 'cover', 'contain'),
    },
    containerView: {
        flex: 1,
    },
    icon: {
        position: 'relative',
        backgroundColor: '#7e5682',
        paddingTop:10,
        paddingLeft:10,
    }
}