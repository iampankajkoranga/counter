
import {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
export default class ChildComp extends Component
{
    render()
    {
    return(
        <View>
        <Text style={{fontSize: 70}}>{this.props.countValue}</Text>
        </View>
    );
    }
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
}

