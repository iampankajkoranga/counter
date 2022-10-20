import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Ecommerce from './Ecommerce';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image,StyleSheet} from "react-native"

const Tab = createBottomTabNavigator();

class Categories extends Component {
  render() {
    alert('empty');
  }
}

class MyCart extends Component {
  render() {
    return alert('empty');
  }
}
class Wishlist extends Component {
  render() {
    return alert('empty');
  }
}

class Account extends Component {
  render() {
    return alert('empty');
  }
}

export default class EcommerceNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
                tabBarLabel:"Home",
            
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./images/home.png')}
               
                />
              ),
            }}
            name="Men Clothing"
            component={Ecommerce}
          />
          <Tab.Screen
            options={{
            //   tabBarLabel: 'account',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./images/options-lines.png')}
                  style={styles.icons}
                />
              ),
            }}
            name="Categories"
            component={Categories}
          />
          <Tab.Screen
            options={{
            //   tabBarLabel: 'account',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./images/cart.png')}
                //   style={styles.menImg}
                />
              ),
            }}
            name="MyCart"
            component={MyCart}
          />
          <Tab.Screen
            options={{
            //   tabBarLabel: 'account',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./images/fav1.png')}
               
                />
              ),
            }}
            name="Wishlist"
            component={Wishlist}
          />
          <Tab.Screen
            options={{
            //   tabBarLabel: 'account',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={require('./images/acc.png')}
                />
              ),
            }}
            name="Account"
            component={Account}
          />
         
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
    icons:{
        height:20,
        width:20
    }
})