import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React from 'react';
import { useCallback, useRef,useState } from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';

const Data = [
  {
    id: 101,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 102,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 103,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 104,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 105,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 106,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 107,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 108,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 109,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 110,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 111,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 112,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 113,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 114,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 115,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 116,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 117,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 118,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 119,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 120,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 121,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 122,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 123,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 124,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 125,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 126,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 127,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 128,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 129,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 130,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 131,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 132,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 133,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 134,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 135,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 136,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 137,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 138,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 139,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 140,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
];
// const windowHeight = Dimensions.get('window').height;



const Scroll = () => {
const [text, setText]=useState("")
const[ref,setRef]=useState(null)
const[showbutton, setbutton]=useState(false)
//   var flatlistRef = useRef(null).current
const _keyExtractor = useCallback((_, index) => index.toString());


const Back=()=>{
  const id = Data.findIndex((item) => item.id === text);
  ref.scrollToIndex({
    index:id,
    animated:true,
   
  });
 setText('')
}

const end=()=>{
  setbutton(true)
}
const onScrollEvent = ({contentOffset}) => {
  console.log(contentOffset.y);
  return contentOffset.y <= 10470
};


// }
// const _getItemLayout = useCallback((_, index) => ({
//   length: 370,
//   offset: 370 * index,
//   index,
// }));

  return (
 
   
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
      <TextInput
          style={styles.input}
          onChangeText={(text)=>{setText(text)}}
     
          placeholder="placeholder"
         
        />
      <TouchableOpacity onPress={()=>{
        ref.scrollToIndex({
          index:text,
          animated:'true'
        })
      }}>
        
     
        <Text style={styles.button}>Click me</Text>
      </TouchableOpacity>
      </View>
       

      <FlatList
        // ref={flatList}
        ref={(ref)=>{
        setRef(ref)
        }}
        style={{flex: 1}}
        data={Data}
        onEndReached={end}
        keyExtractor={(item, index) => `${index + item.id}`}
        onScroll={({nativeEvent}) => {
          if(onScrollEvent(nativeEvent)){
              setbutton(false);
          }
        }}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: 'black',
                margin: 18,
                justifyContent: 'center',
                borderRadius:10
              }}>
              <View></View>
              <View>
                <Text
                  style={{
                    paddingVertical: 10,
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {item.id}
                </Text>
              </View>
              <View>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{
                    height: 200,
                    width: 200,
                    alignSelf: 'center',
                    margin: 10,
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      {showbutton &&
      <TouchableOpacity style={styles.back}  onPress={Back} >
        <Text style={styles.button}>Back To Top</Text>
      </TouchableOpacity>}
    </SafeAreaView>
  );
};

export default Scroll;

const styles = StyleSheet.create({
  main:{
   
    padding:10

  },
  input: {
    height: 40,
    width:150,
    alignSelf:"center",
    borderWidth: 1,
    marginBottom:5

  },
  button:{
    borderWidth:1,
    alignSelf:"center",
    backgroundColor:"lightblue"
  },
  // back:{

  // }
});