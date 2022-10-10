import React from 'react';
import ChildComp from './ChildComp';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor called');
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState({count: this.state.count + 1});
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  };
  Reset = () => {
    this.setState({count: (this.state.count = 0)});
  };

  static getDerivedStateFromProps() {
    console.log('Parent getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Parent componentDidMount called');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate called');
  }

  shouldComponentUpdate() {
    console.log('Parent shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Parent getSnapshotBeforeUpdate called');
    return null;
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount');
  }
  render() {
    console.log('render called');
    return (
      <SafeAreaView>
        <View style={styles.wrap}>
          <Text style={{fontSize: 40}}>Counter</Text>
          <View style={styles.counter}>
            <TouchableOpacity style={styles.button} onPress={this.increment}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            <ChildComp countValue={this.state.count}></ChildComp>
            <TouchableOpacity style={styles.button} onPress={this.decrement}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.Reset}>
            <Text style={styles.btnText}>Reset</Text>
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
    borderRadius: 10,
  },
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
  },
});

export default App;
