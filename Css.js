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
    Ionicons
  } from 'react-native';

const styles = StyleSheet.create({
    header: {
      // flex: 1,
      backgroundColor: 'rgb(109,189,121)',
      padding: 10,
      marginBottom: 50,
     
    },
    headerText: {
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
    },
    textContainer: {
    
      alignItems: 'center',
      marginBottom: 60,
    },
    text: {
      fontSize: 22,
      color: 'rgb(142,142,142)',
    },
    inputContainer: {
      flexDirection: 'row',
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
      fontSize: 20,
      padding: 8,
      textAlign: 'center',
      marginHorizontal: 60,
      color: 'rgb(146,185,165)',
      borderColor: 'rgb(153,183,168)',
      marginBottom:80
      
    },
})
export default styles;