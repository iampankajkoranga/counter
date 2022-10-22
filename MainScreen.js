import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import styles from './Css';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.heading}>
            <Text style={styles.headingText}>Projects</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Movie')}>
          <Text style={styles.buttonText}>Project 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('otp')}>
          <Text style={styles.buttonText}>Project 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Counter')}>
          <Text style={styles.buttonText}>Project 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('SectionList')}>
          <Text style={styles.buttonText}>SectionList</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    heading:{
        alignItems:"center",
       

    },
    headingText:{
        fontSize:30

    },
    page:{
        // backgroundColor:"maroon"
        

    },
  button: {
    backgroundColor:"black",
    margin:30,
    borderRadius:20,
    padding:15
   
  },
  buttonText: {
    textAlign: 'center',
    color:"white"
  },
});
