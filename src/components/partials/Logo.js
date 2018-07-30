import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getStyleFromProps} from '../../utils';

export default class Logo extends Component {
    render() {
        const style = [
            logoStyle.imageContainer,
            getStyleFromProps(['marginTop'], this.props)
        ]
        return <View style={style}>
            <Image source={require('../../img/Que5_logo.png')} style={logoStyle.image} resizeMode="cover"/>
        </View>
    }
}

Logo.propTypes = {
    marginTop: PropTypes.number
}

const logoStyle = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    }
})

