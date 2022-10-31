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
import Animation2 from './Animation2';
import Animation from './Animation';
// import Scroll from './Scroll';

const Stack = createNativeStackNavigator();

export default class Navigate extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
         
        {/* <Stack.Screen name="scroll" component={Scroll} /> */}
          <Stack.Screen name="animation2" component={Animation2} />
          <Stack.Screen name="animation" component={Animation} />
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
