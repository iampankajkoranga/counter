import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from 'react-native';
// import styles from './Css';

export default class MainScreen extends React.Component {
  render() {
    return (
      <ScrollView>
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('slider')}>
            <Text style={styles.buttonText}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('alert')}>
            <Text style={styles.buttonText}>Alert and backhandler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('animation')}>
            <Text style={styles.buttonText}>Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('animation2')}>
            <Text style={styles.buttonText}>Animation2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Scroll')}>
            <Text style={styles.buttonText}>Scroll</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('storage')}>
            <Text style={styles.buttonText}>DataStore</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={() =>{
                AsyncStorage.getItem('storedData').then((data) => {
                    if(data){
                        this.props.navigation.navigate('Dashboard')
                    }else{
                        this.props.navigation.navigate('DataStore')
                    }
                }).catch(() => {})
              }} navigation={this.props.navigation} >
                  <Text style={styles.buttonText}>DataStore</Text>
              </TouchableOpacity>
          

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
  },
  page: {
    // backgroundColor:"maroon"
  },
  button: {
    backgroundColor: 'black',
    margin: 30,
    borderRadius: 20,
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
