import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { Images } from 'src/assets'

export default class TimeLineAction extends Component {
  onPress(){
    
  }
  render() {
    return (
      <View style={styles.footer}>
        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <Image style={{marginLeft:20}} source={Images.common.likeNormal} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <Image source={Images.common.comment} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.onPress()}>
          <Image style={{marginRight:20}} source={Images.common.shareIcon} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  footer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop : 16,
    marginBottom: 16,
    paddingRight: 20,
    justifyContent: 'space-between',
  }
});
