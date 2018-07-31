/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Home extends Component {
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
            pagina: 'home'
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#422A44"
                    barStyle="light-content"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:16, marginTop: 10, marginBottom: 10 }}>
                        <Image source={require('../img/Que5.png')} resizeMode="stretch" style={{ height: 40, width: 100, marginRight: 30 }} />
                       
                    </View>
                {this.state.pagina == 'home' && <View style={styles.contenido}>

                    <TouchableOpacity onPress={() => navigate('pregunta')} activeOpacity={0.7} style={{ padding: 10, borderRadius: 5, backgroundColor: '#7E5682', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#E1DADF', flex: 1, fontWeight: 'bold' }}>Nueva pregunta?</Text>
                        <IconMaterial name="chevron-right" size={35} color="#E1DADF" />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => navigate('preguntas_con')}
                            activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../img/avatar_1.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 20 }} />
                                <Text style={{ flex: 1, color: '#C1A9C1' }}>@Juanita_perez</Text>
                                <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: '#7E5682', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF' }}>1</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E1DADF', marginLeft: 50, marginTop: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../img/avatar_2.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 20 }} />
                                <Text style={{ flex: 1, color: '#A4A4A4' }}>@mariano_123</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E1DADF', marginLeft: 50, marginTop: 5 }} />
                        </TouchableOpacity>
                    </View>

                </View>}
                {this.state.pagina == 'friends' && <View style={styles.contenido}>
                    <View activeOpacity={0.7} style={{ padding: 10, borderRadius: 5, backgroundColor: '#E1DADF', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#C1A9C1', flex: 1, fontWeight: 'bold' }}>Pregunta algo, anonimamente</Text>
                        <IconMaterial name="help" size={35} color="#C1A9C1" />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <View activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ flex: 1, color: '#A4A4A4' }}>¿Qué superpoder tendrías?</Text>
                                <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#7E5682', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF', padding: 5, fontSize: 12,fontWeight:'bold' }}>Responder</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E1DADF', marginTop: 5 }} />
                        </View>
                        <View activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ flex: 1, color: '#A4A4A4' }}>Si sólo pudieras tener un hobby, ¿cuál sería?</Text>
                                <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#7E5682', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF', padding: 5, fontSize: 12,fontWeight:'bold' }}>Responder</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E1DADF', marginTop: 5 }} />
                        </View>
                    </View>

                </View>}
                <View style={styles.bottomNav}>
                    <View style={{borderTopColor:'#7E5682', flexDirection: 'row', alignItems: 'center',justifyContent:'center', marginTop: 10, marginBottom: 10 }}>
                        {/* <Image source={require('../img/Que5.png')} resizeMode="stretch" style={{ height: 50, width: 120, marginRight: 30 }} /> */}
                        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }} onPress={() => this.setState({ pagina: 'home' })}>
                            <IconMaterial name="home" size={35} color={this.state.pagina == 'home' ? "#7E5682" : "#E1DADF"} />
                            <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }} onPress={() => this.setState({ pagina: 'friends' })}>
                            <IconMaterial name="checkbox-multiple-blank-circle-outline" size={35} color={this.state.pagina == 'friends' ? "#7E5682" : "#E1DADF"} />
                            <Text style={{ color: '#A4A4A4', fontSize: 10 }} >Questions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
                            <IconMaterial name="account" size={35} color="#E1DADF" />
                            <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    contenido: {
        marginHorizontal: 16,
        marginVertical: 20
    },
    bottomNav:{
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});