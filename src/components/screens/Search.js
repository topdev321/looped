import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TextInput,
  View
} from 'react-native';

import { Header } from 'src/screens/components'
import { Images } from 'src/assets'

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.leftAction = this.leftAction.bind(this);
  }

  leftAction(){
    //this.props.nav('Search');
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftButtonPressed={this.leftAction}
          leftIcon={Images.common.cancelIcon}
        />
        <View style={styles.search}>
          <Image style = {{marginLeft:18,tintColor:'green'}} source={Images.common.searchIcon} />
          <TextInput placeholder='Search...'
            style={{marginLeft:18, width:100}} underlineColorAndroid={'transparent'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  search: {
      position: 'absolute', top: 60, left: 0, right: 0,
      height: 60,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor : "white"
  },
  cancel: {
    position: 'absolute', bottom: 14, left: 16
  }
});
