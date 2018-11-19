import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  View
} from 'react-native';

import { Images } from 'src/assets'
import Main from '../screens/Main'
import { Header } from 'src/screens/components'

export default class Compose extends Component {
  close(){
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftButtonPressed={this.close}
          leftIcon={Images.common.cancelIcon}
          rightButtonPressed={this.close}
          rightIcon={Images.common.postIcon}
        />
        <View style={styles.search}>
          <Image style={styles.profile_thumbnail} source={Images.common.profilePic} />
          <Text placeholder='Search...'
            style={{marginLeft:18,fontSize:18}} >Catherine Harris</Text>
        </View>
        <TextInput placeholder = "What's on your mind ?"  multiline = {true} style={styles.editor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  editor:{
    marginTop : 150,
    marginLeft : 20,
    width : (Dimensions.get('window').width)-40,
    height : 400
  },
  header: {
    flex: 1,
    position: 'absolute', top: 0, left: 0, right: 0,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'space-between',
    backgroundColor : '#6A398D'
  },
  profile_thumbnail:{
    height : 40,
    width : 40,
    marginLeft : 20
  },
  search: {
      position: 'absolute', top: 80, left: 0, right: 0,
      height: 60,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor : "white"
  },
  topicon :{
    marginTop : 18,
    resizeMode:'center',
    height : 50,
    width : 50
  },
  cancel: {
    position: 'absolute', bottom: 14, left: 16
  }
});
