

import {Text, View, StyleSheet, Slider, Switch} from 'react-native';
import React, {Component} from 'react';

export default class Slide extends Component {
  state = {sliderValue: 0, switchValue: false};

  render() {
    return (
      <View style={styles.switchSlider}>
        <View style= {styles.switch}>
          <Switch
          
            value={this.state.switchValue}
            onValueChange={switchValue => this.setState({switchValue})}
          

          />
          <View>
            <Text>Toggle for the Slider</Text>
          </View>
        </View>
        {this.state.switchValue && (
          <View>
            <Text>{this.state.sliderValue}</Text>
            <Slider
              maximumValue={100}
              minimumValue={0}
              step={1}
              minimumTrackTintColor="blue"
              maximumTrackTintColor="lightblue"
              value={this.state.value}
              onValueChange={sliderValue => this.setState({sliderValue})}
            />
            {/* <Text>ok</Text> */}
          </View>
        )}
    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  switchSlider: {
    flex: 1,
   
  },
  switch: {
    marginTop:50,
    // justifyContent:"center",
    alignItems:'center'
  },

 
});
