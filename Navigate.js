// In App.js in a new project

import {Component} from 'react';
//import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieTicket from './MovieTicket';
import OtpScreen from './OtpScreen';
import App from './App';
import MainScreen from './MainScreen';
import SectionLists from './Section';
import Slide from './slider';
import Alerts from './Alerts';


const Stack = createNativeStackNavigator();


export default class Navigate extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
      
       

          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Movie" component={MovieTicket} />
          <Stack.Screen name="otp" component={OtpScreen} />
          <Stack.Screen name="Counter" component={App} />
          <Stack.Screen name="SectionList" component={SectionLists} />
          <Stack.Screen name="slider" component={Slide} />
          <Stack.Screen name="alert" component={Alerts} />
        
       
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
