import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  Text,
  Alert,
  TextInput,
  View
} from 'react-native';

import { Images } from 'src/assets'
import Line from '../views/Line'

export default class AddGame extends Component {
  changeLogo = () => {
    Alert.alert(
   'You need to...'
)
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableHighlight onPress={() => this.changeLogo()}>
              <Image style={styles.cancel} source={Images.common.cancelIcon} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.changeLogo()}>
              <Text style={styles.text_add}>ADD</Text>
            </TouchableHighlight>

        </View>

        <View style={styles.content_container}>
          <Text style={styles.text}>GAME TITLE</Text>
          <TextInput style={styles.text_input} />
          <Line style={styles.line} />
          <View style={{height : 30}} />
          <Text style={styles.text}>VISIBILITY</Text>
          <TextInput style={styles.text_input} />
          <Line />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text : {
    fontWeight : 'bold',
    fontSize : 16,
    color : '#AEB6BA'
  },
  text_add:{
    position: 'absolute', top: 0, right: 0,
    fontWeight : 'bold',
    color : 'white'
  },
  line :{
    marginLeft : 10,
    marginRight : 10
  },
  text_input : {
    height : 40,
    width:100
  },
  header: {
      position: 'absolute', top: 0, left: 0, right: 0,
      height: 60,
      backgroundColor : '#6A398D',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'space-between'
  },
  content_container: {
      position: 'absolute', top: 130, left: 10, right: 130,
      height: 260,
      flexDirection:'column',
      backgroundColor : "white"
  },
  cancel: {
    position: 'absolute', top: 0, left: 0
  }
});
