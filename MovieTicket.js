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

export class MovieTicket extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.header}>
          <Image source={require('./images/back.png')} />
          <Text>Product Details</Text>
          <Image source={require('./images/save.png')} />
        </View>
        <ScrollView style={styles.page}>
          <View style={styles.mainBody}>
            <Image
              style={styles.poster}
              source={require('./images/poster.jpeg')}
            />
          </View>
          <View style={styles.mainText}>
            <Text style={styles.text}>
              How To Train YourDragon The Hidden World
            </Text>
            <Text style={styles.text}>Part III</Text>
            
          </View>
          <View style={styles.genres}>
              <View style={styles.genre}>
                <Text style={styles.genreText}>Adventure</Text>
              </View>
              <View style={styles.genre}>
                <Text style={styles.genreText}>Family</Text>
              </View>
              <View style={styles.genre}>
                <Text style={styles.genreText}>Fantasy</Text>
              </View>
            </View>
          <View style={styles.line}></View>
          <View style={styles.part2}>
            <View style={styles.desc}>
              <Text style={styles.descText}>Year</Text>
              <Text style={styles.descText}>Country</Text>
              <Text style={styles.descText}>Length</Text>
            </View>
            <View style={styles.desc}>
              <Text>2019</Text>
              <Text>USA</Text>
              <Text>112 min</Text>
            </View>
            <Text style={styles.aboutMain}>About Movie</Text>
            <Text style={styles.about}>
              When Hiccup discovers Toothless isn't the only Night Fury, he must
              seek "The Hidden World", a secret Dragon Utopia before a hired
              tyrant named Grimmel finds it first.
            </Text>
            <Text>Screenshots</Text>
            <View style={styles.screenshots}>
              <ScrollView horizontal={true}>
                <Image
                  style={styles.img}
                  source={require('./images/ss1.jpg')}
                />
                <Image
                  style={styles.img}
                  source={require('./images/ss2.jpeg')}
                />
                <Image
                  style={styles.img}
                  source={require('./images/ss3.jpg')}
                />
                <Image
                  style={styles.img}
                  source={require('./images/ss4.jpeg')}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <Text style={styles.ticket}>Buy Ticket</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    marginHorizontal: 4,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
  },
  mainBody: {
    // marginHorizontal:10,
    alignItems: 'center',
  },
  page: {
    backgroundColor: 'rgb(248,249,252',
  },
  poster: {
    width: 300,
    // alignItems:"center",
    height: 400,
    borderRadius: 20,
    marginBottom: 25,
  },
  mainText: {
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 8,
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 100,
    alignItems:'center',
    // borderWidth:2,
    marginHorizontal: 10,
    // backgroundColor:'red'
    paddingHorizontal: 50
  },
  genre: {
    // borderWidth:1,
    marginTop: 11,
    borderRadius: 14,
    backgroundColor: 'rgb(59,106,245)',
    padding: 6,
    marginHorizontal: 10,

    
  },
  genreText: {
    color: 'white',
  },
  line: {
    borderWidth: 0.3,
    marginBottom: 30,
  },
  part2: {
    marginHorizontal: 10,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'grey',
    paddingHorizontal:45
  },
  descText: {
    color: 'grey',
  },
  aboutMain: {
    marginTop: 25,
    marginBottom: 15,
  },
  about: {
    fontSize: 13,
    marginBottom: 10,
  },
  screenshots: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 20,
  },
  img: {
    height: 150,
    width: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  ticket: {
    backgroundColor: 'rgb(59,106,245)',
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 20,
    padding: 8,
    color: 'white',
    marginHorizontal:10,
    // borderWidth:1,
    borderRadius: 10,
   
  }
});

export default MovieTicket;
