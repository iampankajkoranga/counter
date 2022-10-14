import {
    View,
    Text,
    TextInput,
    style,
    SafeAreaView,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    // NumberPad,
    // Display,
    // Input,
    Ionicons
  } from 'react-native';

const styles = StyleSheet.create({
    header: {
      // flex: 1,
      backgroundColor: 'rgb(109,189,121)',
      padding: 10,
      marginBottom: 50,
      // alignItems:"center"
      // justifyContent: 'center',
      // alignText: 'center',
      // textAlign: 'center',
    },
    headerText: {
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
    },
    textContainer: {
      // textAlign:"center"
      alignItems: 'center',
      marginBottom: 60,
    },
    text: {
      fontSize: 22,
      color: 'rgb(142,142,142)',
    },
    inputContainer: {
      flexDirection: 'row',
      // alignItems:"center",
      justifyContent: 'center',
      marginBottom: 70,
    },
    input: {
      borderWidth: 1.5,
      borderColor: 'rgb(235,235,235)',
      height: 40,
      width: 40,
      marginHorizontal: 10,
      textAlign: 'center',
      borderRadius: 5,
    },
    button: {
      borderWidth: 1,
      // height:1
      fontSize: 20,
      padding: 8,
      // alignItems:"center"
      textAlign: 'center',
      marginHorizontal: 60,
      color: 'rgb(146,185,165)',
      borderColor: 'rgb(153,183,168)',
      marginBottom:80
      // borderTopColor:"red"
      // borderBottom: 20
      // borderBottom:"4px solid blue"
    },
})
export default styles;