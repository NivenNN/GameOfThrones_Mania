import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Jon from './screens/Home';
import Quotes from './screens/AryaQuotes';
import ned from './screens/Ned';
import Footer from './Footer';
import Start from './screens/start';
import Sansa from './screens/sansa';

import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Arya Stark"
        component={Quotes}
      />
      <Stack.Screen
        name="Jon Snow"
        component={Jon}
      />
      <Stack.Screen
        name="Ned Stark"
        component={ned}
      />
      <Stack.Screen
        name="Home"
        component={Start}
      />
      <Stack.Screen
        name="Sansa Stark"
        component={Sansa}
      />
    </Stack.Navigator>
    <Footer></Footer>
  </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  }
})
