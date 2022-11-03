import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import React from 'react';
import {useState} from 'react';

const Data = [
  {
    placeholder: 'enter',
    img: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
    key: 'name',
  },
  {
    placeholder: 'email',
    img: 'https://cdn-icons-png.flaticon.com/128/646/646094.png',
    key: 'email',
  },
  {
    placeholder: 'Contact No',
    img: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
    key: 'phone',
  },
  {
    placeholder: 'Password',
    img: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
    key: 'Password',
  },
  {
    placeholder: 'Confirm Password',
    img: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
  },
];

const Input = ({navigation}) => {
  const [Info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    password:''
  });

  const storeData = async () => {
    // props.navigation.navigate("Dashboard")
    // await AsyncStorage.setItem("storedData", JSON.stringify(storedData));
    try {
      await AsyncStorage.setItem('storedData', JSON.stringify(Info));
      console.log(Info);
      navigation.navigate('Dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  const onchangeHandler = (txt, key) => {
    setInfo({
      ...Info,
      [key]: txt,
    });
  };
  // console.log(Info)
  return (
    <View>
      {Data.map(item => {
        return (
          <View style={style.component}>
            <View style={style.inputView}>
              <View style={style.imgView}>
                <Image style={style.logo} source={{uri: item.img}} />
              </View>

              <TextInput
                style={style.textinput}
                // label={label}
                placeholder={item.placeholder}
                onChangeText={txt => {
                  onchangeHandler(txt, item.key);
                }}
              />

              {/* </TextInput> */}
            </View>
          </View>
        );
      })}
      <View>
        <TouchableOpacity onPress={storeData} style={style.button}>
          <Text style={style.buttonText}>CREATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    //borderColor: 'rgb(49,116,243)',
    // borderWidth: 0,
    borderRadius: 30,
    width: 330,
    height: 60,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: 'rgb(255,255,255)',
  },
  imgView: {
    width: 18,
    height: 18,
  },
  logo: {
    height: '100%',
    width: '100%',
  },

  textinput: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    // width:70,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
});
