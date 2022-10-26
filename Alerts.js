
import React, { useState,useEffect } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Alert,BackHandler
} from 'react-native';



const Alerts = (props) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => props.navigation.goBack() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


 

  const readFromClipboard = async () => {
    //To get the text from clipboard
    let clipboardContent = await Clipboard.getString();
    alert('Text from Clipboard: ' + clipboardContent);
  };

  const writeToClipboard = async () => {
    //To copy the text to clipboard
    Clipboard.setString(input1);
    alert('Copied to Clipboard!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
         CLIPBOARD
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(input1) => setInput1(input1)}
          value={input1}
          placeholder="Type here"
        />
        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={writeToClipboard}>
            {/* Clicking on button will show the rating as an alert */}
            <Text style={styles.buttonTextStyle}>Copy to Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={readFromClipboard}>
            {/* Clicking on button will show the rating as an alert */}
            <Text style={styles.buttonTextStyle}>Get from Clipboard</Text>
          </TouchableOpacity>
        </View>



      
      </View>
    </SafeAreaView>
  );
};

export default Alerts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"blue",
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
  },
  button:{
    flexDirection:"row"

  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: '50%',
    padding: 10,
    backgroundColor: 'red',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  // lineStyle: {
  //   color: 'black',
  //   borderWidth: 2,
  //   margin: 10,
  // },
});