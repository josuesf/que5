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
    ScrollView,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Pregunta extends Component {
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
                    backgroundColor="#008577"
                    barStyle="light-content"
                />
               <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    paddingHorizontal: 16, paddingTop: 10, paddingBottom: 10
                }}>
                    <TouchableOpacity onPress={() => goBack()} style={{ alignItems: 'center', marginRight: 20 }}>
                        <IconMaterial name="close" size={35} color="#00A896" />
                    </TouchableOpacity>
                    <Text style={{ color: '#00A896', fontSize: 16, fontWeight: 'bold' }}>Nueva Pregunta</Text>
                </View>
                <View style={{ alignContent: 'center', alignItems: 'center', padding: 20,marginTop:30 }}>
                    <Text style={{ color: '#00A896', fontSize: 35, alignSelf: 'center', fontWeight: 'bold' }}>Cual es tu color favorito?</Text>
                </View>
                <ScrollView>

                    <TouchableOpacity style={{ backgroundColor: '#F0F3BD', marginHorizontal: 16, borderRadius: 5, marginVertical: 10 }}>
                        <Text style={{ color: '#008577', fontSize: 14, fontWeight: 'bold', padding: 10 }}>Azul</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F0F3BD', marginHorizontal: 16, borderRadius: 5, marginVertical: 10 }}>
                        <Text style={{ color: '#008577', fontSize: 14, fontWeight: 'bold', padding: 10 }}>Morado</Text>
                    </TouchableOpacity>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    contenido: {
        marginHorizontal: 16
    }
});