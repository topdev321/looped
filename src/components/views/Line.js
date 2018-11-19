import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  seperator:{
    height:1,
    backgroundColor : "#F1F3F4",
    width : Dimensions.get('window').width,
  }
});

export default class Line extends Component {
  render() {
    return (
      <View style={styles.seperator}></View>
    );
  }
}
