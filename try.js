import {View, StyleSheet, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const Animation2 = () => {
  const rotateAnimation = new Animated.Value(0);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // const fontSize=new Animated.Value(0)
  // const opacity=new Animated.Value(0);
  const x = new Animated.Value(0);
  const y = new Animated.Value(0);
  // const [fontSize, setFont]=useState(new Animated.Value(0));

  const Rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 5000,
    }).start();
    // Animated.timing(fontSize,{
    //   toValue:50,
    //   duration:3000
    // }).start();
    // Animated.timing(opacity,{
    //   toValue:1,
    //   duration:5000
    // }).start();
  
    Animated.timing(b, {
      toValue: windowWidth - 100,
      duration: 5000,
    }).start();
    Animated.timing(a, {
      toValue: windowHeight - 160,
      duration: 5000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 120,
          // backgroundColor: '',
          transform: [{rotate: Rotate}, {translateX: b}, {translateY: a}],
        }}>
        <Animated.Text
          style={{
            color: 'red',
            fontSize: 40,
            fontWeight: '500',

            // fontSize:40,
            // opacity:opacity,
            // backgroundColor: 'black',
          }}>
          TASK1
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

export default Animation2;
