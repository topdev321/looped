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
import Hyperlink from 'react-native-hyperlink'

import { Images } from 'src/assets'

const styles = StyleSheet.create({
  profile_thumbnail: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  profile_thumbnail_right: {
    height: 46,
    width: 46,
    marginRight: 2
  },
  thumbnail: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 16,
    marginBottom: 16,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  subRow: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subText: {
    color: 'grey',
    fontSize: 12,
  }
});

export default class NotificationItem extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.subRow}>
          <Image style={styles.profile_thumbnail} source={Images.common.profilePic} />
          <View>
            <Text style={styles.subText}>Today at 7:50 PM</Text>
            <Hyperlink
              linkStyle={{ color: '#2980b9', fontSize: 14 }}
              linkText={url => url === 'https://github.com/obipawan/hyperlink' ? '@tariq' : url}>
              <Text style={{ fontSize: 14,marginTop : 10 }}>
                Lorem Ipsum Lorem Ipsum https://github.com/obipawan/hyperlink
              </Text>
            </Hyperlink>

          </View>
        </View>
        <View style={styles.subRow}>
          <Image style={styles.profile_thumbnail_right} source={Images.common.profileMale} />
        </View>
      </View>
    );
  }
}
