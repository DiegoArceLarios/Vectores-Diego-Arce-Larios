
//Escalar es vector-vector y multi escalar-vector, aunque suene contradictorio
//Desarrollado por Diego Arce Larios
import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";



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
        if(pantalla === 'Informacion'){
            this.props.navigation.navigate('Info')
        }
    }

    render(){

        return(
            <ImageBackground source={require('../assets/fisica.png')} style={{flex: 1, padding: 20}}>
                <ScrollView>
                    <View style={styles.textV}>
                        <Text style={styles.titulaT}>
                            Información:
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <View style={{margin: 20}}>
                            <Text style={styles.subtitulo}>
                                Conseptos básicos
                            </Text> 
                            <Text></Text>
                            <Text style={styles.parrafo}>
                                Un vector es una manera de representar cierto tipo de valores llamados unidades vectoriales; esto debido a que estas requieren de una mayor cantidad de información para poder ser comprendidas en su totalidad. Ejemplos de estas unidades vectoriales serián las unidades de fuerza, velocidad, aceleración.
                            </Text>  
                            <Text></Text>     
                            <Text style={styles.parrafo}>
                                Los vectores cuentan con cuatros partes que los caracterizan:
                            </Text>  
                            <Text></Text>   
                            <Text style={styles.parrafo}>
                                1.	Tiene un módulo o un tamaño que vendría siendo el equivalente al valor especifico representado con una cifra.
                            </Text>    
                            <Text style={styles.parrafo}>
                                2.	Los vectores cuentan con una dirección la cual vendría una línea en la cual se verá reflejada el módulo o tamaño del vector
                            </Text> 
                            <Text style={styles.parrafo}>
                                3.	Un vector debe siempre de tener un sentido el cual representará la dirección a la que el módulo será dirigido. A diferencia de la dirección, esta última específicamente una posición a la que es aplicado, la cual dependerá de la línea que la dirección del vector genere.
                            </Text> 
                            <Text style={styles.parrafo}>
                                4.	Los vectores cuentan con un punto de origen el cual es el punto desde donde el vector se originara. Suele ser puesto el punto de origen en 0 en el plano cartesiano.
                            </Text> 
                            <Text></Text>   
                            <Text style={styles.parrafo}>
                                Existen dos maneras de representar un vector, grafica o algebraicamente. Para el método gráfico se hace uso de un plano bidimensional o tridimensional en el cual se coloca una flecha la cual cuenta con un módulo (tamaño de la flecha), una dirección (cuerpo de la flecha) una dirección (punta de la flecha) y un punto de origen (desde donde se empezó a dibujar la flecha); y para el método algebraico se hace uso de vectores unitarios los cuales se representa con una letra (I para el vector unitario de X,  J para el vector unitario de Y, y K para el vector unitario de Z). De esta manera, la suma de cada uno de los vectores unitarios resulta en un vector ubicado en 1, 2 o 3 dimensiones, etc.
                            </Text> 
                            <Text></Text> 
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                Vector expresado algebraicamente = 2I + 3J + K
                            </Text>
                            <Text style={styles.parrafo}>
                                Vector expresado gráficamente = 
                            </Text>
                            <Image source={require('../assets/grafica.png')} style={{width: '100%', height: 290, borderRadius: 20}}/>
                            <Text style={styles.subtitulo}>
                                Operaciones con vectores:                            
                            </Text>
                            <Text></Text> 
                            <Text style={styles.parrafo}>
                                Es importante aclarar que en esta aplicación se trabajara con el método algebraico para todas las operaciones y expresiones vectoriales.
                            </Text>
                            <Text></Text> 
                            <Text style={styles.subsubtitulo}>
                                Suma de vectores:
                            </Text>
                            <Text style={styles.parrafo}>
                                La suma de vectores consiste en sumar cada uno de los vectores unitarios de cada vector con su correspondiente, de manera que resulte en un solo vector.
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector B = 2I - J - K 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector C = A + B, entonces C = (1+2)I + (2-1)J + (-1-1)K
                            </Text>
                            <Text style={styles.parrafo}>
                                C = 3I + J - 2K
                            </Text>
                            <Text></Text> 
                            <Text style={styles.subsubtitulo}>
                                Resta de vectores:
                            </Text>
                            <Text style={styles.parrafo}>
                                La resta de vectores utiliza el mismo método de la suma, sin embargo, invirtiendo los valores a su valor negativo si era positivo, y positivo si era negativo, para después realizar la suma con normalidad.
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector B = 2I - J - K 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector C = A - B, entonces C = (1-2)I + (2+1)J + (-1+1)K
                            </Text>
                            <Text style={styles.parrafo}>
                                C = -I + 3J
                            </Text>
                            <Text></Text>
                            <Text style={styles.subsubtitulo}>
                                Multiplicación escalar
                            </Text>
                            <Text style={styles.parrafo}>
                                La multiplicación escalar se realiza multiplicando el módulo de cada vector unitario con su correspondiente, para después sumar los tres diferentes resultados y de esta manera obtener un resultado escalar único.
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector B = 2I - J - K 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector C = A · B, entonces C = (1 · 2) + (2 · (-1)) + ((-1) · (-1))
                            </Text>
                            <Text style={styles.parrafo}>
                                C = 1
                            </Text>
                            <Text></Text>
                            <Text style={styles.subsubtitulo}>
                                Multiplicación vectorial
                            </Text>
                            <Text style={styles.parrafo}>
                                La multiplicación vectorial se realiza siguiendo lo siguiente, el cual arrojara como resultado un vector:
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector M = A[1]I + A[2]J - A[3]K
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector N = B[1]I - B[2]J - B[3]K 
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector P = C[1]I + C[2]J + C[3]K 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector P = M x N, entonces:
                            </Text>
                            <Text style={styles.parrafo}>
                                C1 = (A[2] * B[3]) - (A[3] * B[2])
                            </Text>
                            <Text style={styles.parrafo}>
                                C2 = (A[3] * B[1]) - (A[1] * B[3])
                            </Text>
                            <Text style={styles.parrafo}>
                                C3 = (A[1] * B[2]) - (A[2] * B[1])
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector B = 2I - J - K 
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector P = C[1]I + C[2]J + C[3]K 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector P = A x B, entonces:
                            </Text>
                            <Text style={styles.parrafo}>
                                C[1] = (2 * (-1)) - ((-1) * (-1))
                            </Text>
                            <Text style={styles.parrafo}>
                                C[2] = ((-1) * (2)) - (1 * (-1))
                            </Text>
                            <Text style={styles.parrafo}>
                                C[3] = (1 * (-1)) - (2 * 2)
                            </Text>
                            <Text style={styles.parrafo}>
                                P = -3I - J - 5K 
                            </Text>
                            <Text></Text>
                            <Text style={styles.subsubtitulo}>
                                Multiplicación de un vector por un escalar:
                            </Text>
                            <Text style={styles.parrafo}>
                                Para esta multiplicación se debe multiplicar cada coeficiente de cada vector unidimensional por un mismo valor escalar.
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                La magnitud escalar B = 3 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector C = A * B, entonces C = (1 * 3) + (2 * 3) + ((-1) * 3)
                            </Text>
                            <Text style={styles.parrafo}>
                                C = 3I + 6J - 3K
                            </Text>
                            <Text></Text>
                            <Text style={styles.subsubtitulo}>
                                División de un vector por un escalar:
                            </Text>
                            <Text style={styles.parrafo}>
                                Para esta división se debe dividir cada coeficiente de cada vector unidimensional por un mismo valor escalar.
                            </Text>
                            <Text style={styles.parrafo}>
                                Eje.
                            </Text>
                            <Text style={styles.parrafo}>
                                El vector A = I + 2J - K
                            </Text>
                            <Text style={styles.parrafo}>
                                La magnitud escalar B = 2 
                            </Text>
                            <Text style={styles.parrafo}>
                                Si el vector C = A / B, entonces C = (1 / 2) + (2 / 2) + ((-1) / 2)
                            </Text>
                            <Text style={styles.parrafo}>
                                C = 0.5I + J - 0.5K
                            </Text>
                            {/*<Text style={styles.parrafo}>
                                Escribe
                            </Text>*/}
                            

                            <TouchableOpacity style={styles.regresar} onPress={()=>this.props.navigation.navigate('Inicio')}>
                                <Text style={[styles.texto1,{fontSize: 15, alignSelf: 'center'}]}>
                                    Regresar
                                </Text>
                            </TouchableOpacity>   
                        </View>                      
                    </View> 
                </ScrollView>
            </ImageBackground>
        )
    }

}
const appleSize = 100
const styles = StyleSheet.create({
    parrafo:{
        color: 'white',
        fontSize: 10 
    },
    subtitulo:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold' 
    },
    subsubtitulo:{
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold' 
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
        marginVertical: 20
    },
    regresar:{
        padding: 5,
        marginVertical: 20,
        backgroundColor: '#EA8888',
        width: '33%',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10
    },
    texto1:{
        fontWeight: 'bold',
        fontSize: 10
    },
    info:{
        backgroundColor: 'black',
        widht: '80%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        borderWidth: 4,
    },

})