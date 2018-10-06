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
    TextInput,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Amigos extends Component {
    static navigationOptions = {
        header: null,
    //    title:'Enviar a',
        //headerTintColor: 'purple',
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
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#008577"
                    barStyle="light-content"
                />
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingHorizontal: 16, paddingTop: 10, paddingBottom: 10
                }}>
                    <TouchableOpacity onPress={() => goBack()} style={{ alignItems: 'center', marginRight: 20 }}>
                        <IconMaterial name="arrow-left" size={35} color="#00A896" />
                    </TouchableOpacity>
                    <Text style={{ color: '#00A896', fontSize: 16, fontWeight: 'bold' }}>Pregunta para:</Text>
                </View>
                <View style={styles.contenido}>
                
                    <TouchableOpacity activeOpacity={0.7} style={{ padding: 10, borderRadius: 5, backgroundColor: '#C7E2DF', flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput placeholder="Buscar Amigos" style={{padding:0,flex:1,fontWeight:'bold'}} placeholderTextColor="#89AEAA" 
                            underlineColorAndroid="transparent"/>
                        <IconMaterial name="magnify" size={35} color="#89AEAA" />
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20 }}>
                        <View onPress={() => navigate('preguntas_con')}
                            activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../img/avatar_1.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 20 }} />
                                <Text style={{ flex: 1, color: '#A4A4A4' }}>@Juanita_perez</Text>
                                <TouchableOpacity style={{  borderRadius: 5, backgroundColor: '#02C39A', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF',padding:10 }}>Enviar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E8E8E8', marginLeft: 50, marginTop: 5 }} />
                        </View>
                        <View activeOpacity={0.6} style={{ paddingVertical: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../img/avatar_2.jpg')} style={{ height: 50, width: 50, borderRadius: 25, marginRight: 20 }} />
                                <Text style={{ flex: 1, color: '#A4A4A4' }}>@mariano_123</Text>
                                <TouchableOpacity style={{  borderRadius: 5, backgroundColor: '#02C39A', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFF',padding:10 }}>Enviar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#E8E8E8', marginLeft: 50, marginTop: 5 }} />
                        </View>
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
        marginTop:10
    }
});