import React from 'react';
import {
  View,
  Text,
  TextInput,
  style,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.top}>
          <Text style={styles.heading}>Sign In </Text>
          <Text style={styles.heading}>Join </Text>
        </View>
        <View style={styles.input1}>
          <TextInput style={styles.input} placeholder="Sing in"></TextInput>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Password"></TextInput>
        </View>
          <Text style={{textAlign:"center"}} >Forget Password?</Text>
        <View style={styles.login}>
          <TouchableOpacity style={styles.Login} >
            <Text style={{textAlign:"center", color:"white",marginTop:4}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  },
//   full:{
//     flex:1

//   },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 60,
  },
  input: {
    borderWidth: 0.5,
    // width: 350,
    height: 30,
    // paddingHorizontal:20,
    // alignItems:"center",
    marginHorizontal: 30,
    marginBottom: 30,
  },
  input1: {
    marginBottom: 20,
    marginTop: 20,
  },
  login:{
    borderWidth: 0.5,
    marginHorizontal: 30,
    backgroundColor:"black",
    marginTop:10,
    height: 30,
    
  }
});
export default Login;
