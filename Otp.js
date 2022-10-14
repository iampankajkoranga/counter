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
import styles from "./Css";


import React, {Component} from 'react';

export default class Otp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   digit1: '',
    //   digit2: '',
    //   digit3: '',
    //   digit4: '',
    // };
  }

  render() {
    // const {digi1, digit2, digit3, digit4}=this.state
    return (
      <View>
        {/* // <SafeAreaView></SafeAreaView> */}
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

  


