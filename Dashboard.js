import { View, Text, TouchableOpacity,Alert,StyleSheet,AsyncStorage} from 'react-native'
import React, { useEffect,useState } from 'react'

import { useNavigation } from '@react-navigation/native'




const Dashboard = (props) => {
  const navigation= useNavigation();
    const [val, setVal]=useState({})


    // const logout = async() => {
    //   Alert.alert(
    //       "Alert Title",
    //       "My Alert Msg",
    //       [
    //         {
    //           text: "dont logout",
    //           onPress: () => {
    //         console.log("cancelled")
    //           },
    //           style: "cancel"
    //         },
    //         { text: "logout", onPress:() =>  {
    //           AsyncStorage.removeItem('storedData');
    //          navigation.navigate('storage')
    //         },
    //       }
    //       ]
    //     );
    // }

    const logout = () => {
      Alert.alert('Alert Title', 'Do you want to logout', [
        {
          text: 'NO',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
             const removeItemValue= async (key) =>{
                  try {
                      await AsyncStorage.removeItem(key);
                      console.log("deleted");
                  }
                  catch(exception) {
                      console.log("not deleted");
                  }
              }
              removeItemValue("storedData")
              navigation.replace('DataStore');
          },
        },
      ]);
    };

    useEffect(()=>{
        _retrieveData(); 

    },[]);

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('storedData');
          if (value !== null) {
            setVal(JSON.parse(value))
            // We have data!!
            console.log(value);
            // console.log(val.name)
          }
        } catch (error) {
          // Error retrieving data
        }
      };
  return (
    <View style={styles.showData}>
      
      <Text>{
      val.name}</Text>
      <Text>{val.email}</Text>
      <Text>{val.phone}</Text>
      <Text>{val.pass}</Text>
      <TouchableOpacity onPress={logout}><Text>LOGOUT</Text></TouchableOpacity>
    </View>
  )
}

export default Dashboard

const styles=StyleSheet.create({
  showData:{
    alignItems:"center"
  }

})