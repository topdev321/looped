import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View
} from 'react-native';
import { Images } from 'src/assets'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={{width: deviceWidth,height:deviceHeight}}
        source={Images.common.splashBg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
