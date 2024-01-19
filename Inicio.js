
//Escalar es vector-vector y multi escalar-vector, aunque suene contradictorio
//Desarrollado por Diego Arce Larios
import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native'



export default class Inicio extends Component{

    constructor(props){
        super(props)
        this.state = {
            texto: 'Elige una opción...'
        }
    }

    cambiarTexto(name){
        this.setState({texto: name})
    }

    translado(pantalla){
        if(pantalla === 'Calculadora'){
            this.props.navigation.navigate('Escalar')
        }
        if(pantalla === 'Información'){
            this.props.navigation.navigate('Info')
        }
    }

    render(){

        return(
            <ImageBackground source={require('../assets/fisica.png')} style={{flex: 1, padding: 20}}>
                <SafeAreaView>
                    <View style={styles.textV}>
                        <Text style={styles.titulaT}>
                            Calculadora Vectorial
                        </Text>
                    </View>
                    <View style={styles.color}>
                        <Text style={styles.pantalla}>
                            {this.state.texto}
                        </Text>                  
                    

                            
                            <TouchableOpacity style={styles.botones} onPress={()=>this.cambiarTexto('Calculadora')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                                    Calculadora
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.botones} onPress={()=>this.cambiarTexto('Información')}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
                                    Información
                                </Text>
                            </TouchableOpacity>
                            
                    </View> 
                    <TouchableOpacity onPress={()=>this.translado(this.state.texto)}>
                        <ImageBackground source={require('../assets/apple.png')} style={styles.apple}>
                            
                                <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
                                    Avanza
                                </Text>
                                
                            {/* ignora este error*/}
                        </ImageBackground>
                    </TouchableOpacity>

                    <Image source={require('../assets/LogoVector.png')} style={{width: '30%', height: '10%', alignSelf: 'flex-end'}}/>
                    <View style={{bottom: 60}}>
                        <Text style={{alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Desarrollado por:
                        </Text>
                        <Text style={{alignSelf: 'flex-start', fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Diego Arce Larios
                        </Text>
                    </View>
                        
                    
                        
                    
                </SafeAreaView>
            </ImageBackground>
        )
    }

}
const appleSize = 100
const styles = StyleSheet.create({
    pantalla:{
        padding: 30,
        paddingHorizontal: 5,
        marginBottom: 30,
        backgroundColor: 'white',
        fontWeight: 'bold'
    },
    apple:{
        width: (appleSize*4)/3,
        height: appleSize,
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    titulaT:{
        fontWeight: 'bold',
        fontSize: 30, 
        backgroundColor: '#4693EB',
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 15,
        padding: 10,
        paddingVertical: 20,
        color: 'white'
    },
    textV:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 60
    },
    color:{
        backgroundColor: 'black',
        padding: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    botones:{
        backgroundColor: '#93B9F1',
        padding: 10,
        margin: 5,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: 'white',
        flexDirection: 'row'
    },

})