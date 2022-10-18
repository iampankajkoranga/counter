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
//   import styles from "./Css";
  
  
  import React, {Component} from 'react';
  
  export default class OtpScreen extends Component {
    constructor(props) {
      super(props);
     
    }
  
    render() {
      return (
        <View>
         
          <View style={styles.header}>
            <SafeAreaView>
              <View>
                <Text style={styles.headerText}>Login into Saavn</Text>
              </View>
            </SafeAreaView>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Enter your code</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref={'digit1Val'}
              autofocus={true}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={digit1 => {
                this.setState({digit1: digit1});
                // if (digit1 != '') {
                //   this.refs.digit2Val.focus();
                // }
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? null: this.refs.digit2Val.focus()
              }}
            />
            <TextInput
              ref={'digit2Val'}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={digit2 => {
                this.setState({digit2: digit2});
                // if (digit2 != '') {
                //   this.refs.digit3Val.focus();}
                // } else if (digit2 == '') {
                //   this.refs.digit1Val.focus();
                
                
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? this.refs.digit1Val.focus(): this.refs.digit3Val.focus()
              }}
            />
            <TextInput
              ref={'digit3Val'}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={digit3 => {
                this.setState({digit3: digit3});
                // if (digit3 != '') {
                //   this.refs.digit4Val.focus();}
                // } else if (digit3 == '') {
                //   this.refs.digit2Val.focus();
                // }
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? this.refs.digit2Val.focus(): this.refs.digit4Val.focus()
              }}
            />
            <TextInput
              ref={'digit4Val'}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={digit4 => {
                this.setState({digit4: digit4});
                // if (digit4 == '') {
                //   this.refs.digit3Val.focus();
                // }
              }}
              onKeyPress={({ nativeEvent }) => {
                nativeEvent.key === 'Backspace' ? this.refs.digit3Val.focus(): null
              }}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.button}>Continue</Text>
            </TouchableOpacity>
          </View>
        
          
        </View>
      );
    }
  }
  
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