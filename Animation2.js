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
  const secondX = new Animated.Value(windowWidth - 100);
  const secondY = new Animated.Value(-50);
  const thirdX = new Animated.Value(0);
  const thirdY = new Animated.Value(windowHeight - 200);
  const fourthX = new Animated.Value(windowWidth - 100);
  const fourthY = new Animated.Value(windowHeight - 200);
  // const [fontSize, setFont]=useState(new Animated.Value(0));

  const Rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  useEffect(() => {
    Animated.loop(Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 5000,
    })).start();

    Animated.loop(Animated.timing(x, {
      toValue: windowWidth - 100,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(y, {
      toValue: windowHeight - 200,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(secondX, {
      toValue: 0,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(secondY, {
      toValue: windowHeight - 250,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(thirdX, {
      toValue: windowWidth - 100,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(thirdY, {
      toValue: -100,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(fourthX, {
      toValue: 0,
      duration: 5000,
    })).start();
    Animated.loop(Animated.timing(fourthY, {
      toValue: -150,
      duration: 5000,
    })).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.View
          style={{
            width: 120,
            // backgroundColor: '',
            transform: [{translateX: x}, {translateY: y}, {rotate: Rotate}],
          }}>
          <Animated.Text style={styles.text}>TASK1</Animated.Text>
        </Animated.View>

        <Animated.View
          style={{
            width: 120,
            // backgroundColor: '',
            transform: [
              {translateX: secondX},
              {translateY: secondY},
              {rotate: Rotate},
            ],
          }}>
          <Animated.Text style={styles.text}>TASK1</Animated.Text>
        </Animated.View>

        <Animated.View
          style={{
            width: 120,
            transform: [
              {translateX: thirdX},
              {translateY: thirdY},
              {rotate: Rotate},
            ],
          }}>
          <Animated.Text style={styles.text}>TASK1</Animated.Text>
        </Animated.View>

        <Animated.View
          style={{
            width: 120,
            transform: [
              {translateX: fourthX},
              {translateY: fourthY},
              {rotate: Rotate},
            ],
          }}>
          <Animated.Text style={styles.text}>TASK1</Animated.Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 40,
    fontWeight: '500',
  },
});

export default Animation2;
