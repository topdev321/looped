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
  profile_thumbnail:{
    height : 30,
    width : 30,
    marginRight : 10,
    resizeMode : 'center',
  },
  thumbnail:{
    height:50,
    width : Dimensions.get('window').width,
  },
  footer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop : 6,
    marginBottom: 6,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  subRow:{
    flexDirection: 'row',
  },
  subText:{
    color: 'black',
    fontSize: 16,
    marginTop : 4,
    marginLeft : 10
  }
});

export default class DrawerItem extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.subRow}>
          <Image style={styles.profile_thumbnail} source={this.props.icon} />
          <View>
            <Text style={styles.subText}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}
