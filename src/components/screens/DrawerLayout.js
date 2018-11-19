import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  ListView,
  View
} from 'react-native';

import ProfileCard from '../views/ProfileCard'
import Line from '../views/Line'
import TimeLineAction from '../views/TimeLineAction'
import DrawerItem from '../views/DrawerItem'
import { Images } from 'src/assets'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class DrawerLayout extends Component {
  constructor(props) {
    super(props);


    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(
        [
          {
            'title': 'Profile',
            'icon': Images.common.profileMenu
          },
          {
            'title': 'People',
            'icon': Images.common.peopleMenu
          },
          {
            'title': 'Setting',
            'icon': Images.common.settingMenu
          },
          {
            'title': 'Feedback',
            'icon': Images.common.feedbackMenu
          },
          {
            'title': 'Help',
            'icon': Images.common.helpMenu
          },
        ]),
    };
  }
  _renderItem = (data, i) => {
    console.log("Data = " + data.title);
    return (
      <View backgroundColor="white">
        <DrawerItem icon={data.icon} title={data.title} />
      </View>
    );
  };
  compose() {
    this.props.toggle();
  }
  render() {
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={() => this.compose()}>
        <View style={styles.container}>
          <Image style={styles.bgImg} source={Images.common.bgTrans} />
          <View style={styles.mainContainer} />
          <View style={styles.profile_container} >
            <Image style={styles.profile_thumbnail} source={Images.common.profileSmall} />
            <Text style={styles.name}>Dominic Milner</Text>
            <Text style={styles.email}>dominic.milner@gmail.com</Text>
          </View>
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.divider} />}
          />
          <View />

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  bgImg: {
    position: 'absolute', left: 0, top: 0, bottom: 0, right: 0
  },
  mainContainer: {
    width: (deviceWidth - (deviceWidth / 4)),
    height: deviceHeight,
    backgroundColor: '#ffffff',
  },
  listview: {
    width: (deviceWidth - (deviceWidth / 4)),
    position: 'absolute', left: 0, top: 206, bottom: 0
  },
  name: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  email: {
    color: 'white',
    marginTop: 6,
    fontSize: 15
  },
  profile_thumbnail: {
    height: 80,
    width: 80,
    marginTop: 10,
    marginRight: 2
  },
  profile_container: {
    position: 'absolute', left: 0, top: 0,
    backgroundColor: '#6A398D',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: (deviceWidth - (deviceWidth / 4))
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});
