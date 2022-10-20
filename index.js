/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Login from './Login';
//import MovieTicket from './MovieTicket';
// import Navigate from './Navigate';
// import Tabs from './Tabs';
// import Ecommerce from './Ecommerce';
import  EcommerceNavigation from './EcommerceNavigation';

import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () =>  Tabs);
// AppRegistry.registerComponent(appName, () =>  Ecommerce);
AppRegistry.registerComponent(appName, () =>  EcommerceNavigation);
