import {Component} from 'react';
//import {View, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieTicket from './MovieTicket';
import OtpScreen from './OtpScreen';
import App from './App';
import MainScreen from './MainScreen';
// import Navigate from './Navigate';
import {NavigationContainer} from '@react-navigation/native';
import { Alert } from 'react-native';

const Tab = createBottomTabNavigator();


export default class Tabs extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainScreen} />
          <Tab.Screen name="Movie" component={MovieTicket} />
          <Tab.Screen name="otp" component={OtpScreen} />
          <Tab.Screen name="Counter" component={App} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
