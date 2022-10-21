
import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

// const ActivityIndicatorElement = () => {
//   return (
//     <ActivityIndicator
//       color="#009688"
//       size="large"
//       style={styles.activityIndicatorStyle}
//     />
//   );
// };
// ...
// export default class MyWebComponent extends Component {
//  constructor(){
//   super();
//   this.state={
//     loading:false,
//   }
//  }
//   render() {
//     return (
//       <SafeAreaView style={{flex:1}}>
//         {this.state.loading && <ActivityIndicator/>}
//          <WebView source={{uri: 'https://github.com/facebook/react-native'}} onLoadEnd= {this.setState({
//           loading: true
//          })}/>
                

//       </SafeAreaView>


export default class MyWebComponent extends Component {
  ActivityIndicatorElement() {
    return (
      <ActivityIndicator
        // color="#009688"
        // size="large"
        style={styles.activity}
      />
    );
  };
  render() {
    return <WebView source={{ uri: 'https://github.com/facebook/react-native' }}
    renderLoading={this.ActivityIndicatorElement}
    startInLoadingState={true}
    
    />
  }
}
const styles = StyleSheet.create ({
  activity: {
    flex: 1,
    backgroundColor:"black",
    height:"100%",
    justifyContent: 'center',
  },
})
    
     


     
     

               

      

       
 