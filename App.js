import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'
import StackNavigator from './navegadores/StackNavigator';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(
   <NavigationContainer>
    <StackNavigator/>
   </NavigationContainer>
   )
};

const styles = StyleSheet.create({
  example: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});




