import React, {Component} from "react";
import {Text, View, TextInput, StyleSheet, ScrollView, SafeAreaView, Alert, Platform, TouchableOpacity, ImageBackground, Image} from 'react-native'

var k=0
var j=0
var i=0
var res = 0
const Limit = 10
const Limit2 = 20

export default class Escalar extends Component{

    constructor(props){
        super(props)
        this.state={
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            number5: 0,
            number6: 0,
            number11: 0,
            number22: 0,
            number33: 0,
            number44: 0,
            number55: 0,
            number66: 0,
            operacion: 1,
            resultado1: 0,
            resultado2: 0,
            resultado3: 0,
            resultado:0
        }
    }


    changeToNumber(num1,num2,num3,num4,num5,num6){
        this.setState({number11: parseInt(num1)})
        this.setState({number22: parseInt(num2)})
        this.setState({number33: parseInt(num3)})
        this.setState({number44: parseInt(num4)})
        this.setState({number55: parseInt(num5)})
        this.setState({number66: parseInt(num6)})
    }


    igual(){
        const{number1,number2,number3,number4,number5,number6,number11,number22,number33,number44,number55,number66,operacion}=this.state
        console.log(number11,number22,number33,number44,number55,number66)
        if ((!number11&&number11 !== 0)||(!number22&&number22 !== 0)||(!number33&&number33 !== 0)||(!number44&&number44 !== 0)||(!number55&&number55 !== 0)||(!number66&&number66 !== 0)){
            Alert.alert('Alerta', 'Verifique que los numeros esten bien escritos')
        }else{
            if(operacion===1){
                this.setState({resultado1:number11+number44, resultado2:number22+number55,resultado3:number33+number66})
            }else if(operacion===2){
                this.setState({resultado1:number11-number44, resultado2:number22-number55,resultado3:number33-number66})
            }else if(operacion===3){
                k=-(number33*number55)+(number22*number66)
                j=-(number11*number66)+(number33*number44)
                i=-(number22*number44)+(number11*number55)
                this.setState({resultado1:k,resultado2:j,resultado3:i})
            }else if(operacion===4){
                k=number11*number44
                j=number22*number55
                i=number33*number66
                res=k+j+i
                this.setState({resultado: res})
            }else if(operacion===5){
                this.setState({
                    resultado1:number11/number44,
                    resultado2:number22/number44,
                    resultado3:number33/number44
                })
            }else if(operacion===6){
                this.setState({
                    resultado1:number11*number44,
                    resultado2:number22*number44,
                    resultado3:number33*number44
                })
            }
        }
    }
    

    render(){
        return(
            
            <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'black'}}>
                <View style={{flex:0.2,justifyContent: 'center', alignItems: 'center', marginTop: 50,  borderBottomWidth: 3, borderColor: 'white'}}>
                    <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
                        Calculadora vectorial
                    </Text>
                </View>
                
                <ScrollView style={{flex: 0.8, borderBottomWidth: 3, borderColor: 'white'}}>
                    <View style={{justifyContent: 'center', marginTop: 40, margin: 10}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            V+V = suma de vectores
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            V-V = resta de vectores
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            VxV = multiplicación vector-vector vectorial
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            V⋅V = multiplicación vector-vector escalar
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            V÷E = división vector-escalar
                        </Text>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                            VxE = multiplicación vector-escalar
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 40, backgroundColor: '#676767'}}>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.vectores}>
                            Vector 1:
                        </Text>
                        <View style={{justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.resetNumber} onPress={()=>this.setState({number1: 0, number2: 0, number3: 0,number11: 0, number22: 0, number33: 0})}>
                                <Image source={require('../assets/repetir.png')} style={{width: '60%', height: '70%'}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput 
                            style={styles.numeros}
                            keyboardType = 'numeric'
                            onChangeText = {(text)=> this.setState({number1: text, number11: parseFloat(text)})}
                            maxLength={Limit}
                            value= {this.state.number1}
                            placeholder="I..."
                        /> 
                        <TextInput 
                            style={styles.numeros}
                            keyboardType = 'numeric'
                            onChangeText = {(text)=> this.setState({number2: text, number22: parseFloat(text)})}
                            maxLength={Limit}
                            value= {this.state.number2}
                            placeholder="J..."
                        /> 
                        <TextInput 
                            style={styles.numeros}
                            keyboardType = 'numeric'
                            onChangeText = {(text)=> this.setState({number3: text, number33: parseFloat(text)})}
                            maxLength={Limit}
                            value= {this.state.number3}
                            placeholder="K..."
                        /> 
                        
                    </View>
                    <Text style={styles.vectores}>
                        Operando:
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===1?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 1, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                V+V
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===2?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 2, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                V-V
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===3?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 3, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                VxV
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===4?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 4, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                V⋅V
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===5?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 5, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                V÷E
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.oper,{backgroundColor: this.state.operacion===6?'#93B9F1':'#E5EAF1'}]} onPress={()=>this.setState({operacion: 6, resultado1: 0, resultado2: 0, resultado3: 0, resultado: 0})}>
                            <Text style={styles.texto1}>
                                VxE
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.vectores}>
                            Vector 2:
                        </Text>
                        <View style={{justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.resetNumber} onPress={()=>this.setState({number4: 0, number5: 0, number6: 0, number44: 0, number55: 0, number66: 0})}>
                                <Image source={require('../assets/repetir.png')} style={{width: '60%', height: '70%'}}/>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={{flexDirection: 'row'}}>
                        {this.state.operacion<=4?
                        <View style={{flexDirection:'row', flex: 1}}>
                            <TextInput 
                                style={styles.numeros}
                                keyboardType = 'numeric'
                                onChangeText = {(text)=> this.setState({number4: text, number44: parseFloat(text)})}
                                maxLength={Limit}
                                value= {this.state.number4}
                                placeholder="I..."
                            /> 
                            <TextInput 
                                style={styles.numeros}
                                keyboardType = 'numeric'
                                onChangeText = {(text)=> this.setState({number5: text, number55: parseFloat(text)})}
                                maxLength={Limit}
                                value= {this.state.number5}
                                placeholder="J..."
                            /> 
                            <TextInput 
                                style={styles.numeros}
                                keyboardType = 'numeric'
                                onChangeText = {(text)=> this.setState({number6: text, number66: parseFloat(text)})}
                                maxLength={Limit}
                                value= {this.state.number6}
                                placeholder="K..."
                            /> 
                        </View>
                        :
                        <TextInput 
                                style={styles.numeros}
                                keyboardType = 'numeric'
                                onChangeText = {(text)=> this.setState({number4: text, number44: parseFloat(text)})}
                                maxLength={Limit2}
                                value= {this.state.number4}
                                placeholder="Escalar..."
                            /> 
                        }
                        
                    </View>
                    <TouchableOpacity style={styles.Escalar} onPress={()=>{
                        //const {number1,number2,number3,number4,number5,number6} = this.state
                        //this.changeToNumber(number1,number2,number3,number4,number5,number6)
                        this.igual()
                        }}>
                        <Text style={styles.texto}>
                            =
                        </Text>
                    </TouchableOpacity>
                        {this.state.operacion===4?
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 35}}>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                                Resultado:
                            </Text>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                                {this.state.resultado}
                            </Text>
                        </View>
                        :
                        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 35}}>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                            Resultado:
                        </Text>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                            ({this.state.resultado1})k + ({this.state.resultado2})j + ({this.state.resultado3})i
                        </Text>
                    </View>
                        }
                    <TouchableOpacity style={styles.regresar} onPress={()=>this.props.navigation.navigate('Inicio')}>
                        <Text style={[styles.texto1,{fontSize: 15, alignSelf: 'center'}]}>
                            Regresar
                        </Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                
            </View>
        )
}
}

const styles = StyleSheet.create({

    Escalar:{
        width: '25%',
        height: 40,
        backgroundColor: '#A8D671',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    vectores:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        padding: 10
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 30
    },
    texto1:{
        fontWeight: 'bold',
        fontSize: 10
    },
    numeros:{
        margin: 5,  
        padding: 5, 
        borderWidth: 3,
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    oper:{
        margin: 5,  
        padding: 10, 
        alignItems: 'center',
        borderWidth: 3,
        flex: 1,
        borderRadius: 10
        
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

    resetNumber:{
        backgroundColor: '#EA8888', 
        height: 40, 
        width: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }

})