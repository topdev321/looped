import React, { Component } from 'react'
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
import { Images } from 'src/assets'

import s from 'src/components/styles'

import Button from 'react-native-button'

import Input from './LoginInput'
import Line from './Line'
import Main from '../screens/Main'

export default class Register extends Component {
  click = (src) => {
    this.props.tSelect(0)
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapperInput}>
          <Input imgIndex='0' placeholder='Username' text='USERNAME' />
          <Input imgIndex='1' placeholder='Password' text='PASSWORD' />
          <Input imgIndex='2' placeholder='Birth date' text='BIRTH DATE' />
          <Input imgIndex='3' placeholder='Email' text='EMAIL' />
        </View>
        <TouchableOpacity onPress={() => this.click()} style={s.button}>
          <Text style={styles.textBtn}>{(`Sign up`).toUpperCase()}</Text>
        </TouchableOpacity>
        <Text style={styles.signWith}>Or you can sign up with</Text>
        <View style={styles.social_container}>
          <Image style={styles.social_icon} source={Images.common.googleIcon} />
          <Image style={styles.social_icon} source={Images.common.fbIcon} />
          <Image style={styles.social_icon} source={Images.common.twichIcon} />
          <Image style={styles.social_icon} source={Images.common.steamIcon} />
        </View>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  social_icon:{
    marginLeft : 15
  },
  social_container :{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  container: {
    flex : 1,
    alignItems: 'center',
    backgroundColor: 'white'
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
    paddingBottom: 15,
    width: (Dimensions.get('window').width)
  },
  textBtn: {
    color: '#fff'
  },
  signWith: {
    color: '#333'
  }
});
