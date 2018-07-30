import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View, Text, Image, StyleSheet, Animated, InteractionManager, Alert,TouchableOpacity
} from 'react-native';
import {Input, Button, Logo, Heading, BackgroundWrapper, AlertStatus} from '../components';
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import {getPlatformValue} from '../utils';

export default class Register extends Component {

    static navigationOptions = {
        title: 'Registrate',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#7e5682'
        },
    };
    
    state = {
        username: '',
        email: '',
        password: '',
        animation: {
            headerPositionTop: new Animated.Value(-148),
            formPositionLeft: new Animated.Value(614),
            buttonPositionTop: new Animated.Value(1354)
        }
    }

    handleChangeInput(stateName, text) {
        this.setState({
            [stateName]: text
        })
    }

    handleRegister() {
        
    }

    unmountComponent(callback) {
        const timing = Animated.timing;
        Animated.parallel([
            timing(this.state.animation.headerPositionTop, {
                toValue: -148,
                duration: 100,
                delay: 90
            }),
            timing(this.state.animation.formPositionLeft, {
                toValue: 614,
                duration: 200,
                delay: 110
            }),
            timing(this.state.animation.buttonPositionTop, {
                toValue: 1354,
                duration: 100,
                delay: 120
            })
        ]).start(callback);
    }

    handleBack() {
    }

    handleLogin() {
        //this.unmountComponent(() => { 
        this.props.navigation.goBack()
        //})
    }

    componentDidMount() {
        Animated.timing(this.state.animation.headerPositionTop, {
            toValue: 0,
            duration: 725,
            delay: 100
        }).start();
        Animated.timing(this.state.animation.formPositionLeft, {
            toValue: 0,
            duration: 700,
            delay: 120
        }).start();
        Animated.timing(this.state.animation.buttonPositionTop, {
            toValue: 0,
            duration: 600,
            delay: 130
        }).start();
    }

    render() {
        return <BackgroundWrapper transparent iconLeft="arrow-left-circle" onPressIcon={this.handleBack.bind(this)}>
            <View style={registerStyle.loginContainer}>
               
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={0.8}
                style={{
                    padding: 0, marginTop: 10,
                }}> 
                <Icon name={"camera"} size={100} color={"#ffffff"} style={{ marginRight: 15 }} />
                </TouchableOpacity>
            </View>

                <View style={registerStyle.formContainer}>
                    <Animated.View style={{position: 'relative', left: this.state.animation.formPositionLeft}}>
                        <Input label="Usuario"
                               icon={<Icon name="user"/>}
                               marginTop={23}
                               value={this.state.username}
                               onChange={this.handleChangeInput.bind(this, 'username')}
                        />
                        <Input label="Email"
                               icon={<Icon name="envelope-o"/>}
                               value={this.state.email}
                               marginTop={23}
                               onChange={this.handleChangeInput.bind(this, 'email')}
                        />
                        <Input label="Contraseña"
                               icon={<Icon name="key"/>}
                               value={this.state.password}
                               marginTop={23}
                               onChange={this.handleChangeInput.bind(this, 'password')}
                               secureTextEntry
                        />
                    </Animated.View>
                    <Animated.View style={{position: 'relative', top: this.state.animation.buttonPositionTop}}>
                        <Button marginTop={getPlatformValue('android',25, 38)} width={200} onPress={this.handleRegister.bind(this)}>
                            Registrar
                        </Button>
                    </Animated.View>
                </View>
            </View>
            <AlertStatus textHelper="Ya tienes una cuenta" textAction="Inicia sesión"
                         onPressAction={this.handleLogin.bind(this)}></AlertStatus>
        </BackgroundWrapper>
    }
}

const registerStyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#7e5682'
    },
    formContainer: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
        //backgroundColor: '#ffffff'
    },
    avatar: {
        borderRadius: 10,
        width: 100,
        height: 100
    }
})