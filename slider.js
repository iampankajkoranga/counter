import {Text, View, StyleSheet, Slider, Switch, } from 'react-native';
import React, {Component, useState} from 'react';



const Slide=()=>{
  const[sliderValue, setSlider]=useState(0)
  const[switchValue, setValue]=useState(false)

// export default class Slide extends Component {
//     constructor(){
//         super()
    
//   this.state = {sliderValue: 0, switchValue: false};
//     }
  // render() {
    return (
      <View style={styles.switchSlider}>
        <View style= {styles.switch}>
          <Switch
          
            value={switchValue}
            onValueChange={switchValue => setValue(switchValue)}
          

          />
          <View>
            <Text>Toggle for the Slider</Text>
          </View>
        </View>
        {switchValue && 
          <View>
            <Text>{sliderValue}</Text>
            <Slider
              maximumValue={100}
              minimumValue={0}
              step={1}
              minimumTrackTintColor="blue"
              maximumTrackTintColor="lightblue"
              value={sliderValue}
              onValueChange={sliderValue => setSlider(sliderValue)}
            />
         
          </View>
        }
    
      </View>
    );
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

export default Slide;