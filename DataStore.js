import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from './Input';
import { AsyncStorage } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const storeData= async(props)=>{
// //   try {
// //     // await AsyncStorage.setItem("renderData", JSON.stringify(Info)
// // props.navigation.navigate("Dashboard")
// //     );
// //   } catch (error) {
// //     // Error saving data
// //   }
// props.navigation.navigate("Dashboard")

// }

const DataStore = ({navigation}) => {
  // const[Info,setInfo]
  // const navigation =useNavigation()
  
  
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.text}>
          <Text style={styles.textOne}>Let's Get Started!</Text>
          <Text style={styles.textTwo}>
            Create an account to Q Allure to get all features
          </Text>
        </View>
        <View style={styles.component}>
         
       
          <Input navigation = {navigation}/>
        </View>
        
        {/* <View>
          <Text>
            Already have an account?
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default DataStore;

const styles = StyleSheet.create({
  main: {
    // margin:20,
    // backgroundColor:"green",
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    height:"100%"
  },
  text: {
    marginTop: 60,
    height: 100,
  },
  textOne: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textTwo: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
    textAlign: 'center',
  },
  component: {
    alignItems: 'center',
  },
  
});
