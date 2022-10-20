import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  style,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const varieties = ['Polo Shirts', 'Dress Shirts', 'Shorts', 'Tshirts-Shirts'];

const arr = [
  {
    link: require('./images/model.webp'),
    Title: 'Tommy Hilfiger',
    Desc: "Men's Morrison Stripe ",
    Price: 'USD 23',
  },
  {
    link: require('./images/model.webp'),
    Title: 'Tommy Hilfiger',
    Desc: "Men's Morrison Stripe ",
    Price: 'USD 23',
  },
  {
    link: require('./images/model.webp'),
    Title: 'Tommy Hilfiger',
    Desc: "Men's Morrison Stripe ",
    Price: 'USD 23',
  },
  {
    link: require('./images/model.webp'),
    Title: 'Tommy Hilfiger',
    Desc: "Men's Morrison Stripe",
    Price: 'USD 23',
  },
];

export default class Ecommerce extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.header}> */}
          {/* <Image source={require('./images/back.png')} /> */}
          {/* <Text>MEN CLOTHING</Text> */}
        {/* </View> */}

        <View style={styles.headerTwo}>
          <View>
            <Text style={styles.headerTwoText}>195 items</Text>
          </View>
          <View style={styles.rightCorner}>
            <View style={styles.sort}>
              <Image
                style={styles.image}
                source={require('./images/sort.png')}
              />
              <Text style={styles.headerTwoText}>SORT</Text>
            </View>
            <View style={styles.filter}>
              <Image
                style={styles.image}
                source={require('./images/filter.png')}
              />
              <Text style={styles.headerTwoText}>FILTER</Text>
            </View>
          </View>
        </View>

        <View style={styles.variety}>
          <ScrollView horizontal={true}>
            {/* <View style={styles.varietyText}>
              <Text>Polo Shirts</Text>
            </View>
            <View style={styles.varietyText}>
              <Text>Dress Shirts</Text>
            </View>
            <View style={styles.varietyText}>
              <Text>Shorts</Text>
            </View>
            <View style={styles.varietyText}>
              <Text>Tshirts</Text>
            </View> */}
            {varieties.map(varieties => {
              return (
                <View style={styles.varietyText}>
                  <Text>{varieties}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <ScrollView>
        <View style={styles.clothes}>
         
            {arr.map(arr => {
              return (
                <View>
                    <View  style={styles.img}>
                   
                    <Image style={styles.images} source={arr.link} />
                   
                    </View>
                  <Text style={styles.new}>New</Text>
                  <TouchableOpacity style={styles.fav}>
                    {/* <View></View> */}
                  <Image source={require('./images/fav1.png')}/>

                  </TouchableOpacity>
                  

                  <Text style={styles.titlecss}>{arr.Title}</Text>
                  <Text>{arr.Desc}</Text>
                  <Text style={styles.pricecss}>{arr.Price}</Text>
                </View>
              );
            })}
         
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.4,
    borderBottomWidth: 1,
    padding: 15,
    // borderBottomColor:"grey"

    // borderWidth:0.5
  },
  headerTwoText: {
    // fontWeight:"bold",
  },
  image: {
    height: 22,
    width: 22,
  },
  rightCorner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    // backgroundColor:"red"
  },
  sort: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 65,
    // backgroundColor:"red"
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 75,
    borderLeftWidth: 0.5,
    paddingLeft: 8,
    //  backgroundColor:"red"
  },
  //   variety: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-around',
  //     // padding: 10,
  //     // margin:30
  //   },
  varietyText: {
    backgroundColor: 'rgb(244,244,244)',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  images: {
    height: 255,
    width: 178,
    // backgroundColor:"red"
  },
  titlecss:{
    marginTop:10,
    fontSize:18,
    fontWeight:"500",
    

  },
  pricecss:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:20

  },
 clothes:{
    padding:10,
    justifyContent:"space-around",
    flexDirection:"row",
    flexWrap: 'wrap',
  
 },
 new:{
    backgroundColor:"green",
    position:"absolute"
  
 },
 fav:{
    position:"absolute",
    right:0

 }

});
