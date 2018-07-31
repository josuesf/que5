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
export default class PreguntasCon extends Component {
    static navigationOptions = {
        header: null,
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
                    backgroundColor="#422A44"
                    barStyle="light-content"
                />
                <View style={{
                    flexDirection: 'row', alignItems: 'center', backgroundColor: '#7E5682',
                    paddingHorizontal: 16, paddingTop: 10, paddingBottom: 10
                }}>
                    <TouchableOpacity onPress={() => goBack()} style={{ alignItems: 'center', marginRight: 20 }}>
                        <IconMaterial name="arrow-left" size={35} color="#E1DADF" />
                    </TouchableOpacity>
                    <Text style={{ color: '#E1DADF', fontSize: 16, fontWeight: 'bold' }}>Preguntas con @josuesf</Text>
                </View>
                <View style={{ backgroundColor: '#E1DADF', paddingHorizontal: 16, paddingVertical: 10 }}>
                    <Text style={{ color: '#7E5682', fontSize: 16,fontWeight:'bold' }}>Cual es tu color favorito?</Text>
                    <Text style={{ color: '#A4A4A4', fontSize: 11 }}>Hace 4 minutos</Text>
                    <TouchableOpacity onPress={()=>navigate('pregunta')} style={{ marginTop: 10, backgroundColor: '#7BCB9B', marginVertical: 10, borderRadius: 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 14, padding: 5, fontWeight: 'bold' }}>Responder</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigate('pregunta')} activeOpacity={0.7} style={{backgroundColor:'#7E5682',marginHorizontal:16,
                    borderRadius:5,flexDirection:'row',marginVertical:10,alignItems:'center'}}>
                    <Text style={{ color: '#E1DADF', fontSize: 14,padding:10, fontWeight: 'bold',flex:1 }}>Seguir Preguntando ...</Text>
                    <IconMaterial name="chevron-right" size={35} color="#E1DADF" />
                </TouchableOpacity> 
                <View style={[styles.contenido,{marginTop:10}]}>
                    <Text style={{ color: '#7E5682', fontSize: 14,fontWeight:'bold' }}>Preguntas Anteriores</Text>
                    <View style={{marginVertical:10}}>
                        <Text style={{ color: '#9B9B9B', fontSize: 16,fontWeight:'bold' }}>Cual es tu color favorito?</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Juan : Azul</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Tu : Negro</Text>
                        <View style={{ height: 1, backgroundColor: '#E1DADF', marginTop: 5 }} />
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{ color: '#9B9B9B', fontSize: 16,fontWeight:'bold' }}>Cual es tu color favorito?</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Juan : Azul</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Tu : Negro</Text>
                        <View style={{ height: 1, backgroundColor: '#E1DADF', marginTop: 5 }} />
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{ color: '#9B9B9B', fontSize: 16,fontWeight:'bold' }}>Cual es tu color favorito?</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Juan : Azul</Text>
                        <Text style={{ color: '#9B9B9B', fontSize: 12 }}>Tu : Negro</Text>
                        <View style={{ height: 1, backgroundColor: '#E1DADF', marginTop: 5 }} />
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
        marginHorizontal: 16
    }
});