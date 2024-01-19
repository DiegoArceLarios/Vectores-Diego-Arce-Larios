import React, {Component} from "react"
import {Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import Inicio from '../Pantallas/Inicio'
import Escalar from '../Pantallas/Escalar'
import Info from "../Pantallas/Info"


const Stack = createStackNavigator()

export default class StackNavigator extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        return(
            <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
                <Stack.Screen name='Inicio' component={Inicio}/>
                <Stack.Screen name='Escalar' component={Escalar}/>
                <Stack.Screen name='Info' component={Info}/>
            </Stack.Navigator>

        )
    }

}