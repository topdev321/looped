import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import renderIf from '../libs/renderIf';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  rightButtonPressed(){
    this.props.rightAction();
  }
  leftButtonPressed(){
    this.props.leftAction();
  }
  render() {
    return (
      <View style={styles.header}>
        {renderIf((this.props.leftIcon != null),
          <TouchableHighlight style={styles.cancel} onPress={() => this.leftButtonPressed()}>
            <Image  source={this.props.leftIcon} />
          </TouchableHighlight>
        )}  
        <Text style={styles.title}>{this.props.title}</Text>
        {renderIf((this.props.rightIcon != null),
          <TouchableHighlight style={styles.right} onPress={() => this.rightButtonPressed()}>
            <Image style={styles.icondim} source={this.props.rightIcon} />
          </TouchableHighlight>
        )}        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
      position: 'absolute', top: 0, left: 0, right: 0,
      height: 60,
      backgroundColor : '#6A398D',
  },
  title :{
    alignSelf: 'center',
    marginTop : 28,
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  },
  cancel: {
    width : 40,
    height : 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',top:18, left: 16
  },
  right: {
    width : 40,
    height : 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',top:18,  right: 16
  }
});