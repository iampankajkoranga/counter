import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  Reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.wrap}>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={this.increment}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 70 }}>{this.state.count}</Text>
            <TouchableOpacity style={styles.button} onPress={this.decrement}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.Reset}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    // display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 40,
  },
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
