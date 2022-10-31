import {View, StyleSheet, Animated} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TextAnimate = () => {
  const rotateAnimation = new Animated.Value(0);
  const fontSize = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  const Rotate = rotateAnimation.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: ['0deg', '720deg', '360deg', '720deg'],
  });

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 4000,
    }).start();
    Animated.timing(fontSize, {
      toValue: 50,
      duration: 5000,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
    }).start();
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          color: 'red',
          fontSize: 47,
          fontWeight: '500',
          transform: [{rotate: Rotate}],

          fontSize: fontSize,
          opacity: opacity,
        }}>
        TASK1
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextAnimate;
