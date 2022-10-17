// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieTicket from './MovieTicket';
import Otp from './Otp';
import App from './App';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();


export default class Navigate extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Movie" component={MovieTicket} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="Counter" component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
