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

const styles = StyleSheet.create({
  profile_thumbnail:{
    height : 50,
    width : 50,
    marginRight : 10
  },
  thumbnail:{
    height:200,
    width : Dimensions.get('window').width,
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
  },
  subRow:{
    flexDirection: 'row',
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom : 8
  },
  subText:{
    color: 'grey',
    fontSize: 12,
  }
});

export default class TimeLineAction extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.subRow}>
          <Image style={styles.profile_thumbnail} source={Images.common.profilePic} />
          <View>
            <Text style={styles.name}>Cathrine</Text>
            <Text style={styles.subText}>Today at 7:50 PM</Text>
          </View>
        </View>
        <View style={styles.subRow}>
          <Image source={Images.common.downArrow} />
        </View>
      </View>
    );
  }
}
