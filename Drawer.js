import {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieTicket from './MovieTicket';
import OtpScreen from './OtpScreen';
import App from './App';
import MainScreen from './MainScreen';
import Navigate from './Navigate';

const Tab = createDrawerNavigator();

export default class Drawer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Drawer.Navigator>
            <Drawer.Screen  name="Home" component={MainScreen} />
            <Drawer.Screen name="Movie" component={MovieTicket}/>
            <Drawer.Screen  name="otp" component={OtpScreen} />
            <Drawer.Screen  name="Counter" component={App} />
          </Drawer.Navigator>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
