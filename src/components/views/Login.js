import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import s from 'src/components/styles'

import Button from 'react-native-button';

import Input from './LoginInput'
import Line from './Line'
import Main from '../screens/Main'

export default class Login extends Component {

  changeLogo = (index) => {
    console.log("Clicked!");
    //Main.convert();

  };
  click = () => {
    this.props.tSelect(0)
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperInput}>
          <Input imgIndex='0' placeholder='Username' text='USERNAME' />
          <Input imgIndex='1' placeholder='Password' text='PASSWORD' />
        </View>
        <TouchableOpacity onPress={() => this.click()} style={s.button}>
          <Text style={styles.textBtn}>{(`Login`).toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.textForgot}>Forget Password? Click here to recover it</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInput:{
    height : 40,
    marginLeft : 20,
    marginRight : 20,
  },
  search: {
      marginLeft : 0,
      height: 30,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor : "white"
  },
  formtext:{
    marginLeft : 20
  },
  seperator:{
    height:1,
    backgroundColor : "#AEB6BA",
    marginBottom : 20,
    width : (Dimensions.get('window').width)-30,
  },
  wrapperInput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: (Dimensions.get('window').width)
  },
  textBtn: {
    color: '#fff'
  },
  textForgot: {
    color: '#333'
  }
});
